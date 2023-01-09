import React, { useEffect } from "react";

const BlogAd = () => {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            console.log(err);
        }
    }, [])

    return (
        <div style={{ width: '100%' }}>
            <ins className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-format="fluid"
                data-ad-layout-key="-fb+5w+4e-db+86"
                data-ad-client="ca-pub-8586017200531248"
                data-ad-slot="2779657459" />
        </div>
    )
}

export default BlogAd
