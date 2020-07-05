import React from "react";
import { useStoreContext } from "../../utils/GlobalState";

function Nav() {
  const [store] = useStoreContext();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Home
      </a>
      <a className="navbar-brand" href="/resume">
        Resume
      </a>
      <a className="navbar-brand" href="/projects">
        Projects
      </a>
      <a className="navbar-brand" href="/contact">
        Contact Me
      </a>
    
      {store.loading ? <a className="navbar-brand ml-auto" href="/">Loading...</a> : <></>}
    </nav>
  );
}

export default Nav;