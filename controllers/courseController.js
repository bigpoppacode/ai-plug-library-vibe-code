const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const matter = require('gray-matter'); // To parse frontmatter from markdown files

const courseDir = path.join(__dirname, '..', '_course_content');

// Helper to get all course pages with their metadata
const getCoursePages = () => {
    const files = fs.readdirSync(courseDir);
    return files.map(file => {
        const content = fs.readFileSync(path.join(courseDir, file), 'utf8');
        const { data } = matter(content);
        return {
            slug: path.parse(file).name,
            title: data.title || 'Untitled',
            description: data.description || ''
        };
    }).sort((a, b) => a.title.localeCompare(b.title));
};


// @desc    Render the course index page
// @route   GET /course
// @access  Private
const getCourseIndexPage = (req, res) => {
    try {
        const pages = getCoursePages();
        const introPage = pages.find(p => p.slug === 'index');
        
        res.render('course/index', {
            title: 'n8n Explainer Course',
            pages: pages,
            introContent: introPage ? marked(matter(fs.readFileSync(path.join(courseDir, 'index.md'), 'utf8')).content) : 'Welcome to the course!'
        });
    } catch (error) {
        console.error('Error loading course index:', error);
        res.status(500).send('Error loading course content.');
    }
};

// @desc    Render a single course page
// @route   GET /course/:slug
// @access  Private
const getCoursePage = (req, res) => {
    try {
        const pages = getCoursePages();
        const slug = req.params.slug;
        const filePath = path.join(courseDir, `${slug}.md`);

        if (fs.existsSync(filePath)) {
            const fileContent = fs.readFileSync(filePath, 'utf8');
            const { data, content } = matter(fileContent);
            const htmlContent = marked(content);
            
            res.render('course/page', {
                title: slug.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
                pages: pages, // For the navigation
                currentPageSlug: slug,
                content: htmlContent
            });
        } else {
            res.status(404).send('Lesson not found.');
        }
    } catch (error) {
        console.error(`Error loading course page ${req.params.slug}:`, error);
        res.status(500).send('Error loading course content.');
    }
};

module.exports = {
    getCourseIndexPage,
    getCoursePage
};
