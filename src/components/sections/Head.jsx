// Importing necessary modules
import React from 'react';
import { Helmet } from 'react-helmet-async';

// Head component to manage document head elements such as title and meta tags
function Head({title, name, description, keywords}) {
  return (
    <>
        <Helmet>
        <title>{title}</title> {/* Setting document title */}
        <meta name={name} content= {description} /> {/* Setting meta description */}
        <meta name="keywords" content={keywords} /> {/* Setting meta keywords */}
        </Helmet>
    </>
  )
}

export default Head;
