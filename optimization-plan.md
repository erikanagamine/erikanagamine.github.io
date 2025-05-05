# Site Optimization Plan

## Overview
This document outlines optimization opportunities for the current website codebase. The recommendations focus on improving performance, maintainability, and best practices.

## CSS Optimization

### 1. Consolidate CSS Files
**Issue**: Currently using multiple CSS imports which cause additional HTTP requests:
```css
@import url('header.css');
@import url('home.css');
@import url('menu.css');
@import url('testimonials.css');
@import url('footer.css');
```
**Recommendation**: Combine all CSS files into a single file for production to reduce HTTP requests.

### 2. Optimize Google Fonts
**Issue**: Loading all weights and styles of Poppins font:
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
```
**Recommendation**: Only load the font weights and styles actually used on the site to reduce download size.

### 3. Minify CSS
**Issue**: CSS files are not minified for production.
**Recommendation**: Implement CSS minification to reduce file sizes.

### 4. Fix Color Variable Definition
**Issue**: `--color-neutral-0` is defined with the same value as `--color-primary-6`:
```css
--color-primary-6: #B26FC3;
--color-neutral-0: #B26FC3;
```
**Recommendation**: Review color scheme and ensure variables are correctly defined.

### 5. Use Efficient Selectors
**Issue**: Some CSS selectors might be inefficient for rendering.
**Recommendation**: Review and optimize CSS selector specificity and complexity.

## JavaScript Optimization

### 1. Optimize Scroll Event Handling
**Issue**: The scroll event handler is not throttled or debounced:
```javascript
$(window).on('scroll', function () {
    // Code that runs on every scroll event
});
```
**Recommendation**: Implement throttling/debouncing to limit the frequency of scroll event processing.

### 2. ScrollReveal Performance
**Issue**: Multiple ScrollReveal instances might impact performance:
```javascript
ScrollReveal().reveal('#cta', {...});
ScrollReveal().reveal('.dish', {...});
ScrollReveal().reveal('#testimonial_chef', {...});
```
**Recommendation**: Batch ScrollReveal calls or consider using more efficient animation techniques for lower-end devices.

### 3. Minify JavaScript
**Issue**: JavaScript is not minified for production.
**Recommendation**: Implement JavaScript minification to reduce file size.

### 4. Load JavaScript Efficiently
**Issue**: Scripts are loaded in the head without `defer` or `async` attributes.
**Recommendation**: Add appropriate attributes to non-critical scripts to improve page load time.

## HTML Optimization

### 1. Optimize External Resource Loading
**Issue**: External resources like Font Awesome are loaded without optimization:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.m...
```
**Recommendation**: Use a subset of Font Awesome that includes only the icons used on the site.

### 2. Improve Semantic HTML
**Issue**: Some HTML elements could use more semantic tags for better accessibility and SEO.
**Recommendation**: Use appropriate semantic tags like `<article>`, `<nav>`, `<section>`, etc.

### 3. Add Meta Tags
**Issue**: Missing important meta tags for SEO and social sharing.
**Recommendation**: Add description, keywords, and OpenGraph meta tags.

## Image Optimization

### 1. Optimize Image Formats
**Issue**: Images might not be using optimal formats or compression.
**Recommendation**: Convert images to next-gen formats like WebP with fallbacks for older browsers.

### 2. Implement Responsive Images
**Issue**: Images don't use responsive image techniques:
```html
<img src="src/images/foto.png" alt="Erika Nagamine">
```
**Recommendation**: Use `srcset` and `sizes` attributes for responsive image loading.

### 3. Image Lazy Loading
**Issue**: No lazy loading for images that are not in the initial viewport.
**Recommendation**: Add `loading="lazy"` attribute to images below the fold.

## Performance Optimization

### 1. Implement Resource Hints
**Issue**: No resource hints are used for external resources.
**Recommendation**: Add `preconnect` or `dns-prefetch` hints for external domains:
```html
<link rel="preconnect" href="https://cdnjs.cloudflare.com">
<link rel="preconnect" href="https://fonts.googleapis.com">
```

### 2. Optimize Critical Rendering Path
**Issue**: External resources block rendering.
**Recommendation**: Inline critical CSS and defer non-critical CSS loading.

## Implementation Plan

1. **Short-term wins**:
   - Add resource hints for external domains
   - Add loading="lazy" to below-the-fold images
   - Fix color variable definition
   - Implement throttling for scroll events

2. **Medium-term improvements**:
   - Minify CSS and JavaScript
   - Optimize Google Fonts loading
   - Implement responsive images

3. **Long-term optimization**:
   - Combine CSS files
   - Optimize images to next-gen formats
   - Inline critical CSS
   - Set up a build process for production optimization