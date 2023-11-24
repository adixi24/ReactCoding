import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../util/appSlice";
import { YOUTUBE_SEARCH_API } from "../util/constant";
import { cacheResults } from "../util/seacrhSlice";

const Head = () => {
  const [searchQuery, setsearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
  /**
   * cashe will be an object
   * {
   * "iphone":["iphone 11","iphone 14"];
   * }
   */

  //debouncing when the difference between the two key stroke is greater than 200 ms then do api call
  useEffect(() => {
    //make an api call after every key press.
    //but if the difference between two keystroke is <200ms
    //decliane the api call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSugeesion();
      }
      getSearchSugeesion();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  /**
   * key =i
   * if i press key i it willl render the component
   * call useeffect()
   * start timmer =>make api call after 200 ms
   *
   * key=ip
   * suppose if we type next key before 200 ms then it will destroy
   * destroy the component (it will call the useEffect return method also)
   * if i press p again it will rerender the component
   * call useeeffect
   * start timmer =>make api call after 200 ms
   * it is the new timmer
   * when we have timer we have to clear that also
   *
   */
  const getSearchSugeesion = async () => {
    console.log("API CAll" + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json);
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/hamburger-menu-icon.png"
          alt="menu"
        />
        <a href="/">
          <img
            className="h-8 "
            src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png"
            alt="logo"
          />
        </a>
      </div>

      <div className="col-span-10 px-10">
        <div>
          <input
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setsearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className=" border border-gray-400 py-2 px-5 bg-gray-100 rounded-r-full">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img
          className="h-8"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="userIcon"
        />
      </div>
    </div>
  );
};

export default Head;
