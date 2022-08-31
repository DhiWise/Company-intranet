# Company Intranet
This company intranet extend Freshteam functionality  By creating a React Web app using a [Dhiwise](dhiwise.com), Figma design, Freshteam API, and Supabase, mapping capability of employees with the visual diagram of employees details.



### Table of Contents
- [Features](#features)
- [Screenshots](#screenshots)
- [Setup](#setup)
- [Version of Technologies](#version-of-technologies)
- [Folder Structure](#folder-structure)
- [Installed Dependency](#Installed-Dependency)
- [License](#license)
- [Community](#community)

# Features
<ul>
<li>
Dashboard
<ul>
<li>Visual diagrams using Bar charts,pie chart</li>

</ul>
</li>

<li>
List of Employee
<ul>
<li>Employee details </li>
<li>Sync all employees to supabase</li>
</ul>
</li>
<li>
Employee capability List
<ul>
<li>Details about capability of employees</li>

</ul>
<li>
Add Capability
<ul>
<li>Add/edit capability into employee capability list</li>
</ul>
</li>
</ul>

## Screenshots

![1](https://user-images.githubusercontent.com/75874584/183234865-fa2591b8-5ad0-4bf2-815e-fd17655d2f12.png)
![2](https://user-images.githubusercontent.com/75874584/183234866-31b45b85-210a-448c-8e90-450706ce64ac.png)
![4](https://user-images.githubusercontent.com/75874584/183234879-a11a8dbe-9ca9-45db-b09f-710a6fc34add.png)
![6](https://user-images.githubusercontent.com/75874584/183234882-7fd21695-6ebc-40c7-951a-77375d2127ce.png)
![7](https://user-images.githubusercontent.com/75874584/183234886-337f034d-e019-42a8-be71-b3f05902c3dd.png)

# Setup

#### 1. [Setup React](https://reactjs.org/docs/getting-started.html)


#### 2. Clone the repository
```sh
$ git clone https://github.com/jemeetala/Companyintranet_freashwork.git
$ cd Companyintranet_freashwork
```
## Install Dependencies

    npm install
## Running the App

    npm start

## Running the storybook

We have detected common components and have generated possible variants of it. To check the documentation of generated common components by integrating storybook, Please follow below steps.

## Install and Initializes

     npx storybook init

## Run the Storybook

      npm run storybook


#### 3. [Create Supabase database](https://supabase.com/docs/guides/database)
#### 4. [Freshteam setup](https://developers.freshteam.com/api/)
    

<h3><u>Where to get the token?</u></h3>

  1. Create account on freshteam and To find the API key that you can use to integrate Freshteam with any of the systems you are using, you need the API key, which you can find by following these simple steps.

  2. Go to your Profile avatar inside Freshteam and click on it.
  In the drop-down that appears, you will find API Key.


# Version of Technologies

- [git](https://git-scm.com/) - v2.13 or greater
- [NodeJS](https://nodejs.org/en/) - `12 || 14 `
- [npm](https://www.npmjs.com/) - v6 or greater


## Folder Structure

After creation, your project should look like this:

```
.
├── package.json
├── package-lock.json
├── postcss.config.js
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── src
│   ├── App.js
│   ├── assets
│   │   ├── fonts ---------- Project fonts
│   │   └── images --------- All Project Images
│   ├── components --------- UI and Detected Common Components
│   ├── constants ---------- Project constants, eg: string consts
│   ├── hooks -------------- Helpful Hooks
│   ├── index.js
│   ├── pages -------------- All route pages
│   ├── Routes.js ---------- Routing
│   ├── styles
│   │   ├── index.css ------ Other Global Styles
│   │   └── tailwind.css --- Default Tailwind modules
│   └── util
│       └── index.js ------- Helpful utils
└── tailwind.config.js ----- Entire theme config, colors, fonts etc.
```

For the project to build, **these files must exist with exact filenames**:

- `public/index.html` is the page template;
- `src/index.js` is the JavaScript entry point.

You may create subdirectories inside src. For faster rebuilds, only files inside src are processed by Webpack.
You need to put any JS and CSS files inside src, otherwise Webpack won’t see them.

Only files inside public can be used from public/index.html.
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.
They will not be included in the production build so you can use them for things like documentation.

## Installed Dependency

The generated project includes React and ReactDOM as dependencies. It also includes a set of scripts used by Create React App as a development dependency. You may install other dependencies (for example, React Router) with `npm`:


   1. @tailwindcss/forms - `0.4.0`   
   2. @testing-library/jest-dom - `^5.15.1`
   3. @testing-library/react - `^11.2.7`
   4. @testing-library/user-event - `^12.8.3`
   5. axios - `^0.27.2`
   6. lodash - `^4.17.21`
   7. prop-types - `^15.8.1`
   8. react - `17.0.2`
   9. react-datepicker - `^4.5.0`
   10. react-dom - `17.0.2`
   11. react-modal - `^3.14.4`
   12. react-router-dom - `6.0.2`
   13. react-router-hash-link - `^2.4.3`
   14. react-scripts - `5.0.0`
   15. react-select - `^5.2.1`
   16. react-toastify - `^9.0.1`
   17. recharts - `^2.1.9`
   18. simple-react-hook-form - `^1.0.4`
   19. underscore - `^1.13.4`
   20. web-vitals - `^2.1.0`
   
# License

Copyright (c) 2022 DhiWise

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Community

<a href="https://twitter.com/dhiwise"><img src="https://user-images.githubusercontent.com/35039342/55471524-8e24cb00-5627-11e9-9389-58f3d4419153.png" width="60"></a>

<a href="https://discord.com/invite/rFMnCG5MZ7"><img src="https://user-images.githubusercontent.com/47489894/183043664-b01aac56-0372-458a-bde9-3f2a6bded21b.png" width="60"></a>

<a href="https://www.dhiwise.com/"><img src="https://global-uploads.webflow.com/618e36726d3c0f19c9284e56/62383865d5477f2e4f6b6e2e_main-monogram-p-500.png" width="60"></a>


<a href="https://www.youtube.com/c/DhiWise"><img src="https://www.gstatic.com/youtube/img/promos/growth/e627e007b3838086012608ef9370c211889f46b95b2335af722b53a2e49a0cd6_122x56.webp" width="60"></a>



