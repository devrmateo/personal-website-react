export default function SubNav() {
  return (
    <section className="subNavPanel">
      <h4 className="subNavHeader">Related</h4>
      <nav className="subNav">
        <ul className="related">
          <li className="relatedLi">
            <a
              className="subNavLink"
              href="https://www.optoutnews.org/"
              target="_blank"
              rel="noreferrer"
            >
              OptOut
            </a>
          </li>
          <li className="relatedLi">
            <a
              className="subNavLink"
              href="https://github.com/CodersForBernieSanders/BernieBnB"
              target="_blank"
              rel="noreferrer"
            >
              BernieBnB
            </a>
          </li>
          <li className="relatedLi">
            <a
              className="subNavLink"
              href="https://medium.com/udacity/my-journey-from-spanish-instructor-to-web-developer-went-through-udacity-f18e522b2406"
              target="_blank"
              rel="noreferrer"
            >
              My Journey from Spanish Instructor to Web Developer With Udacity
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}
