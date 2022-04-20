import React, { useState, useRef, useCallback, useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function StatDropDown() {
  const menuEntry = [
    {
      label: "Elements",
      desc: "Buttons, Avatars, Badges, Alerts, Progress bar....",
      link: "/components#elements",
    },
    {
      label: "Forms",
      desc: "Input text, Select, Textarea, Login pages, Signin templates ...",
      link: "/components#forms",
    },
    {
      label: "Commerce",
      desc: "Pricing cards, Shopping cards, Basket layouts...",
      link: "/components#commerce",
    },
    {
      label: "Navigation",
      desc: "Headers, Footers, Sidebar ...",
      link: "/components#navigation",
    },
    {
      label: "Sections",
      desc: "Features, CTA, testimonial, Team sections ...",
      link: "/components#pagesection",
    },
    {
      label: "List",
      desc: "List, Tables, Todo list, Description List, Actions list...",
      link: "/components#list",
    },
  ];
  const [isSectionOpen, setIsSectionOpen] = useState(false);
  const listElement = useRef();
  const selectButton = useRef();
  const handleClickOutside = useCallback((event) => {
    const myHTMLWrapper = listElement.current;
    const btnElement = selectButton.current;
    if (
      myHTMLWrapper &&
      btnElement &&
      !myHTMLWrapper.contains(event.target) &&
      !btnElement.contains(event.target)
    ) {
      setIsSectionOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);
  return (
    <nav className="z-40 hidden md:flex space-x-10 bg-white-800 mr-10 ">
      <div className="relative">
        <button
          ref={selectButton}
          type="button"
          onClick={() => setIsSectionOpen(!isSectionOpen)}
          className="group bg-white rounded-md text-gray-800 inline-flex items-center text-base font-normal hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-xl"
        >
          <span>Stats</span>
        </button>
        {isSectionOpen && (
          <div
            ref={listElement}
            className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                {menuEntry.map((entry) => {
                  return (
                    <a
                      key={entry.label}
                      className="p-2 flex items-center rounded-lg text-indigo-600 hover:bg-gray-50"
                    >
                      <div className="font-normal">
                        <p className="text-lg text-gray-900">{entry.label}</p>
                        <p className="mt-1 text-sm text-gray-500">
                          {entry.desc}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
