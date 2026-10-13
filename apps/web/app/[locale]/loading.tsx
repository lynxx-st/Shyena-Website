export default function Loading() {
  return (
    <main aria-busy="true" className="route-loading" id="main">
      <output aria-live="polite" className="route-loading-status">
        <span aria-hidden="true" className="route-loading-mark">
          S<span>.</span>
        </span>
        <span>Loading page</span>
      </output>
      <div aria-hidden="true" className="route-loading-track">
        <span />
      </div>
    </main>
  );
}
