const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const matter = require('gray-matter');

const baseDir = path.join(__dirname, '..');

const courseConfig = {
    'course': { dir: '_course_content', name: 'The N8N Automation Course' },
    'prompts-course': { dir: '_chatgpt_course', name: 'The Prompt Course' },
    'ai-creator-course': { dir: '_ai_creator_course', name: 'The AI Creator Course' },
    'vibe-coding-course': { dir: '_vibe_coding_course', name: 'The Vibe Coding Course' }
};

const getCoursePages = (courseKey) => {
    const courseDir = path.join(baseDir, courseConfig[courseKey].dir);
    if (!fs.existsSync(courseDir)) {
        return [];
    }

    const files = fs.readdirSync(courseDir);
    return files.map(file => {
        const content = fs.readFileSync(path.join(courseDir, file), 'utf8');
        const { data } = matter(content);
        return {
            slug: path.parse(file).name,
            title: data.title || 'Untitled',
            description: data.description || ''
        };
    }).sort((a, b) => {
        const slugA = a.slug;
        const slugB = b.slug;

        // 'index' always first
        if (slugA === 'index') return -1;
        if (slugB === 'index') return 1;

        // 'conclusion' always last
        if (slugA === 'conclusion') return 1;
        if (slugB === 'conclusion') return -1;

        const regex = /^(?:Lesson_)?(\d+)/;
        const matchA = slugA.match(regex);
        const matchB = slugB.match(regex);

        if (matchA && matchB) {
            const numA = parseInt(matchA[1], 10);
            const numB = parseInt(matchB[1], 10);
            return numA - numB;
        }

        // If one has a number and the other doesn't, numbered one comes first.
        if (matchA) return -1;
        if (matchB) return 1;

        // Fallback to alphabetical sorting for any other case
        return slugA.localeCompare(slugB);
    });
};

const getCourseIndexPage = (courseKey, title) => (req, res) => {
    try {
        const pages = getCoursePages(courseKey);
        const courseDir = path.join(baseDir, courseConfig[courseKey].dir);
        const introPage = pages.find(p => p.slug === 'index');
        const introContent = introPage ? marked(matter(fs.readFileSync(path.join(courseDir, 'index.md'), 'utf8')).content) : `Welcome to the ${title}!`;

        res.render('course/index', {
            title: title,
            pages: pages,
            introContent: introContent,
            coursePrefix: `/${courseKey}`
        });
    } catch (error) {
        console.error(`Error loading ${courseKey} index:`, error);
        res.status(500).send('Error loading course content.');
    }
};

const getCoursePage = (courseKey) => (req, res) => {
    try {
        const pages = getCoursePages(courseKey);
        const slug = req.params.slug;
        const courseDir = path.join(baseDir, courseConfig[courseKey].dir);
        const filePath = path.join(courseDir, `${slug}.md`);

        if (fs.existsSync(filePath)) {
            const fileContent = fs.readFileSync(filePath, 'utf8');
            const { data, content } = matter(fileContent);
            const htmlContent = marked(content);
            
            res.render('course/page', {
                title: data.title || slug.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
                pages: pages,
                currentPageSlug: slug,
                content: htmlContent,
                coursePrefix: `/${courseKey}`
            });
        } else {
            res.status(404).send('Lesson not found.');
        }
    } catch (error) {
        console.error(`Error loading ${courseKey} page ${req.params.slug}:`, error);
        res.status(500).send('Error loading course content.');
    }
};

module.exports = {
    getCourseIndexPage,
    getCoursePage
};
