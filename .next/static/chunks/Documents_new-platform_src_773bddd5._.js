(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/new-platform/src/lib/ghost.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$tryghost$2f$content$2d$api$2f$es$2f$content$2d$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@tryghost/content-api/es/content-api.js [app-client] (ecmascript)");
;
const ghost = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$tryghost$2f$content$2d$api$2f$es$2f$content$2d$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
    url: 'http://localhost:2368',
    key: '6d386941834a5286d34a66e2e4',
    version: 'v5.0'
});
const __TURBOPACK__default__export__ = ghost;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/new-platform/src/lib/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isValidGhostPost",
    ()=>isValidGhostPost,
    "toValidGhostPost",
    ()=>toValidGhostPost
]);
function isValidGhostPost(post) {
    return typeof post.slug === 'string' && typeof post.title === 'string' && typeof post.published_at === 'string' && typeof post.feature_image === 'string' && typeof post.excerpt === 'string';
}
function toValidGhostPost(post) {
    if (typeof post.slug === 'string' && typeof post.title === 'string' && typeof post.published_at === 'string' && typeof post.feature_image === 'string' && typeof post.excerpt === 'string') {
        var _post_tags;
        return {
            slug: post.slug,
            title: post.title,
            published_at: post.published_at,
            feature_image: post.feature_image,
            excerpt: post.excerpt,
            html: post.html,
            reading_time: post.reading_time,
            tags: (_post_tags = post.tags) === null || _post_tags === void 0 ? void 0 : _post_tags.map((tag)=>({
                    name: tag.name || '',
                    slug: tag.slug
                })),
            // Add display properties
            date: new Date(post.published_at).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            }),
            description: post.excerpt || 'No description available',
            image: post.feature_image || 'https://via.placeholder.com/400x300'
        };
    }
    return null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/new-platform/src/lib/ghostArticles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getArticleBySlug",
    ()=>getArticleBySlug,
    "getArticles",
    ()=>getArticles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$src$2f$lib$2f$ghost$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/src/lib/ghost.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/src/lib/types.ts [app-client] (ecmascript)");
;
;
async function getArticles() {
    try {
        console.log('Attempting to fetch articles from Ghost API...');
        const posts = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$src$2f$lib$2f$ghost$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].posts.browse({
            limit: 'all',
            include: [
                'tags',
                'authors'
            ],
            fields: [
                'slug',
                'title',
                'published_at',
                'feature_image',
                'excerpt',
                'reading_time'
            ]
        });
        console.log("Fetched ".concat(posts.length, " posts from Ghost API"));
        // Convert posts to valid GhostPosts
        const validPosts = posts.map(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toValidGhostPost"]).filter((post)=>post !== null);
        console.log("Found ".concat(validPosts.length, " valid posts"));
        return validPosts;
    } catch (error) {
        console.error('Error fetching articles:', error);
        // Provide more detailed error logging
        if (error instanceof Error) {
            console.error('Error details:', {
                name: error.name,
                message: error.message,
                stack: error.stack
            });
        }
        return [];
    }
}
async function getArticleBySlug(slug) {
    try {
        console.log("Attempting to fetch article with slug: ".concat(slug));
        const post = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$src$2f$lib$2f$ghost$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].posts.read({
            slug: slug
        }, {
            include: [
                'tags',
                'authors'
            ],
            fields: [
                'slug',
                'title',
                'published_at',
                'feature_image',
                'excerpt',
                'html',
                'reading_time'
            ]
        });
        const processedPost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toValidGhostPost"])(post);
        if (processedPost) {
            console.log("Successfully fetched article with slug: ".concat(slug));
            return processedPost;
        } else {
            console.warn("Article with slug ".concat(slug, " failed validation"));
            return null;
        }
    } catch (error) {
        console.error("Error fetching article with slug ".concat(slug, ":"), error);
        // Provide more detailed error logging
        if (error instanceof Error) {
            console.error('Error details:', {
                name: error.name,
                message: error.message,
                stack: error.stack
            });
        }
        return null;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/new-platform/src/app/articles/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ArticlesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$src$2f$lib$2f$ghostArticles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/src/lib/ghostArticles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/src/lib/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function ArticlesPage() {
    _s();
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [articles, setArticles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const articlesPerPage = 3;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArticlesPage.useEffect": ()=>{
            async function fetchArticles() {
                try {
                    setIsLoading(true);
                    const fetchedArticles = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$src$2f$lib$2f$ghostArticles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArticles"])();
                    // Transform and validate Ghost articles
                    const transformedArticles = fetchedArticles.map(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toValidGhostPost"]).filter({
                        "ArticlesPage.useEffect.fetchArticles.transformedArticles": (article)=>article !== null
                    }["ArticlesPage.useEffect.fetchArticles.transformedArticles"]);
                    setArticles(transformedArticles);
                    if (transformedArticles.length === 0) {
                        setError('No articles found');
                    }
                } catch (err) {
                    console.error('Failed to fetch articles:', err);
                    setError('Failed to load articles. Please try again later.');
                } finally{
                    setIsLoading(false);
                }
            }
            fetchArticles();
        }
    }["ArticlesPage.useEffect"], []);
    const totalPages = articles.length > 0 ? Math.ceil(articles.length / articlesPerPage) : 0;
    const startIndex = (currentPage - 1) * articlesPerPage;
    const currentArticles = articles.slice(startIndex, startIndex + articlesPerPage);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-24 px-6 bg-background",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl text-muted-foreground",
                    children: "Loading articles..."
                }, void 0, false, {
                    fileName: "[project]/Documents/new-platform/src/app/articles/page.tsx",
                    lineNumber: 55,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/new-platform/src/app/articles/page.tsx",
                lineNumber: 54,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/new-platform/src/app/articles/page.tsx",
            lineNumber: 53,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-24 px-6 bg-background",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl text-red-500",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/Documents/new-platform/src/app/articles/page.tsx",
                    lineNumber: 65,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/new-platform/src/app/articles/page.tsx",
                lineNumber: 64,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/new-platform/src/app/articles/page.tsx",
            lineNumber: 63,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-24 px-6 bg-background",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl font-bold text-foreground mb-4",
                            children: "All Articles"
                        }, void 0, false, {
                            fileName: "[project]/Documents/new-platform/src/app/articles/page.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-muted-foreground",
                            children: "Discover the latest trends and innovations in sustainable technology"
                        }, void 0, false, {
                            fileName: "[project]/Documents/new-platform/src/app/articles/page.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/new-platform/src/app/articles/page.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-3 gap-8 mb-12",
                    children: currentArticles.map((article)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/articles/".concat(article.slug),
                            passHref: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "group cursor-pointer",
                                "data-slug": article.slug,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-slate-200 dark:bg-slate-800 rounded-md h-48 mb-4 overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: article.feature_image || 'https://via.placeholder.com/400x300',
                                            alt: article.title,
                                            width: 400,
                                            height: 300,
                                            className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/new-platform/src/app/articles/page.tsx",
                                            lineNumber: 88,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/new-platform/src/app/articles/page.tsx",
                                        lineNumber: 87,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-muted-foreground mb-2",
                                        children: new Date(article.published_at).toLocaleDateString('en-US', {
                                            month: 'long',
                                            day: 'numeric',
                                            year: 'numeric'
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/new-platform/src/app/articles/page.tsx",
                                        lineNumber: 96,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-semibold text-foreground mb-2 group-hover:text-blue-600 transition-colors",
                                        children: article.title
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/new-platform/src/app/articles/page.tsx",
                                        lineNumber: 103,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground",
                                        children: article.excerpt
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/new-platform/src/app/articles/page.tsx",
                                        lineNumber: 106,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/new-platform/src/app/articles/page.tsx",
                                lineNumber: 86,
                                columnNumber: 15
                            }, this)
                        }, article.slug, false, {
                            fileName: "[project]/Documents/new-platform/src/app/articles/page.tsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/new-platform/src/app/articles/page.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this),
                totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center items-center space-x-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            onClick: ()=>setCurrentPage(Math.max(1, currentPage - 1)),
                            disabled: currentPage === 1,
                            children: "Previous"
                        }, void 0, false, {
                            fileName: "[project]/Documents/new-platform/src/app/articles/page.tsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this),
                        Array.from({
                            length: totalPages
                        }, (_, i)=>i + 1).map((page)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: page === currentPage ? "default" : "outline",
                                onClick: ()=>setCurrentPage(page),
                                className: "w-10 h-10 p-0",
                                children: page
                            }, page, false, {
                                fileName: "[project]/Documents/new-platform/src/app/articles/page.tsx",
                                lineNumber: 125,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            onClick: ()=>setCurrentPage(Math.min(totalPages, currentPage + 1)),
                            disabled: currentPage === totalPages,
                            children: "Next"
                        }, void 0, false, {
                            fileName: "[project]/Documents/new-platform/src/app/articles/page.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/new-platform/src/app/articles/page.tsx",
                    lineNumber: 116,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/new-platform/src/app/articles/page.tsx",
            lineNumber: 73,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/new-platform/src/app/articles/page.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_s(ArticlesPage, "LmOQ6VIUwG+Z2mnpgYUaks199+0=");
_c = ArticlesPage;
var _c;
__turbopack_context__.k.register(_c, "ArticlesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_new-platform_src_773bddd5._.js.map