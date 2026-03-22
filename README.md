# dywo website

Plain static HTML site served via GitHub Pages using Jekyll.

https://owen-kellie-smith.github.io/dywo-website/

**Similar repos** https://owen-kellie-smith.github.io/static-websites

---

You can edit any page directly on GitHub — no software needed.

**How to edit a file (if you are the repo owner):**
1. Find the page 
2. Click the **pencil icon** (✏️) in the top-right of the file view
3. Make your changes
4. Click **Commit changes**

The site updates automatically within a minute or two.

**How to change something (if you are not the repo owner):**
1. Raise an [issue](https://github.com/owen-kellie-smith/dywo-website/issues) i.e. describe what you want, or
2. Fork the repo (make a copy that you control)
3. Edit the fork.
4. Render the fork by creating a page (Settings -> Pages) running from your repo's root directory
5. Create a pull request (that your changes be incorporated into the main site).

---

# Typical edits

## Add a page

Copy one of the `.md` files in _pages. 

Change its title (in the YAML front matter) i.e. in the text  above  the three lines at the top of the `.md`.
Change its nav_order (in the YAML front matter). If you want it just after the page it copied then just add a little to the existing nav_order.


## Add or delete an event

Edit `_pages\events.md`.

# How to render the site on command line:

`jekyll serve`

and then browse to

`http://localhost:4000`


---


## 🗂️ File structure

```
index.md                – Home Page content
_pages/
 *.md                   – Other page content
assets/                 – photos and PDFs
  style.css             – Shared styles
_layout			- Page format
```

---

## 🚀 GitHub Pages setup (first time only)

1. Push this folder to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to **main branch / root folder**
4. Site goes live at `https://<username>.github.io/<repo>/` ie in this case at `https://owen-kellie-smith.github.io/dywo-website/`

