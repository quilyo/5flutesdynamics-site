# 5flutesdynamics.com

Static one-page site for 5 Flutes Dynamics LLC (plain HTML/CSS/JS, no build step), hosted on GitHub Pages with the custom domain in `CNAME`.

## To finish setup
- **Quote form:** get a free access key at https://web3forms.com (sent to yolquin@5flutesdynamics.com) and replace `bd0974c5-de88-44b8-bf13-dcf222dba87a` in `index.html`.
- **Instagram feed:** create a Behold or Elfsight widget for @5flutesdynamics and paste its embed code inside `<div id="ig-embed">` in the `#instagram` section.
- **Pages:** Settings → Pages → deploy from `main` / root; add the DNS records GitHub lists at your registrar (leave MX records alone), then enable "Enforce HTTPS".

Preview locally: `python3 -m http.server` and open http://localhost:8000.
