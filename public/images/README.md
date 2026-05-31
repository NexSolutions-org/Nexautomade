# Image Assets

Replace placeholder gradient divs with real images by placing them here.

## Folder Structure

```
/public/images/
  logo.png                          → Navbar & Footer logo
  /projects/
    nexautomade.png                 → Project screenshots (26 files)
    monday-hosters.png
    crossroad-business.png
    ... (name matches project title in kebab-case)
  /testimonials/
    daniel-morris.jpg               → Client avatars (9 files)
    sophia-reynolds.jpg
    michael-turner.jpg
    bilal-ehsan.jpg
    ahmad-ali.jpg
    ayesha-alia.jpg
    matthew-wyman.jpg
    anthom-spar.jpg
    metho-partho.jpg
  /clients/
    eraedge.png                     → Client logos for marquee
    power.png
    emirates-caravan.png
    riftstone-ventures.png
    wildlife-parks.png
  /about/
    about-hero.png                  → About page hero image
```

## How to use real images

In the component files, replace the gradient placeholder `<div>` with:

```tsx
import Image from "next/image";

<Image
  src="/images/projects/project-name.png"
  alt="Project Name"
  fill
  className="object-cover"
/>
```
