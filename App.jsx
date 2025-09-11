import React from 'react'

export default function App() {
  return (
    <div className="wrap">
      <div className="card">
        <h1>Azary’el Flame</h1>
        <p><em>Light of the Chosen</em></p>
        <p>Original UI shell with Codex hook and assets. Add your modules next.</p>
        <div className="row">
          <a className="btn" href="../codex/Codex.html">Open Codex</a>
          <a className="btn" href="../assets/watermark-sigil.svg" download>Download Sigil</a>
        </div>
        <footer>
          <a href="../policy/privacy-policy.html" target="_blank" rel="noreferrer">Privacy Policy</a>
          <span>·</span>
          <a href="../policy/delete-data.html" target="_blank" rel="noreferrer">Delete Data</a>
          <span>·</span>
          <a href="mailto:amcclure201@gmail.com">Contact</a>
        </footer>
        <p style={marginTop: 12}><small>Build the web app, then use the pre-wired Capacitor wrapper in <code>/mobile</code> to make your APK.</small></p>
      </div>
    </div>
  )
}
