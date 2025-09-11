# Azary’el Flame — Original App Package (v3)

**New in v3**
- Privacy Policy (`/policy/privacy-policy.html`) and Delete Data (`/policy/delete-data.html`) wired with your email.
- Footer links added in app UI.
- Ready to host on GitHub Pages for Play Console URLs.

**To host on GitHub Pages**
1) Create a public repo and upload the project.
2) Settings → Pages → Deploy from branch: `main` / `/` root.
3) Links will be at:
   /policy/privacy-policy.html
   /policy/delete-data.html

**Build APK (quick path)**
1) `cd web && npm install && npm run build`
2) `cd ../mobile && npm install && npx cap add android`
3) `npx cap copy && npx cap open android`
4) Android Studio → Build → Generate Signed Bundle/APK…
