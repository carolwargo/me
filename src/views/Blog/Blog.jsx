import React from "react";
import WomanReading from "../../assets/images/WomanReading.jpg";
import Business from "../../assets/images/About/Business.png";
import BlogHeader from "./BlogHeader";
import Posts from "./Posts";
import PostsShare from "./PostsShare";
import { FaTwitter, FaFacebook, FaPinterest, FaGithub } from "react-icons/fa";
import {
  TwitterShareButton,
  FacebookShareButton,
  PinterestShareButton,
} from "react-share";
import { AiTwotoneBulb } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";

const Blog = () => {
  return (
    <div>
      <BlogHeader />
      <main className="">
        <div className="w3-content" style={{ maxWidth: "1400px" }}>
          {/* start Header */}
          {/*row start for the whole page with exception of header & footer */}
          <div className="w3-row p-2">
            {" "}
            {/*card start for bio, popular posts & tags*/}
            <div className="w3-col p-4 l4">
              {" "}
              {/*card start for bio*/}
              <div className="w3-card w3-margin mx-4">
                {" "}
                {/*card-image-start for bio*/}
                <img
                  src={WomanReading}
                  alt="blog-profile"
                  style={{ width: "100%" }}
                ></img>{" "}
                {/*card-image-start for bio*/}
                <div className="w3-container w3-white justify-content-center">
                  {" "}
                  {/*card-container-start for bio*/}
                  <br></br>
                  <h5 className="mt-3" style={{ fontFamily: "sans-serif" }}>
                    <b>Carol Wargo</b>
                  </h5>
                  <p className="mb-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Impedit vel harum odio nihil maxime dolorem explicabo
                    blanditiis, optio eaque quasi vero quae nostrum voluptates.
                    Non natus minus omnis ipsa in!{" "}
                  </p>
                  <br></br>
                </div>{" "}
                {/*card-container-end for bio*/}
              </div>
              {/*card end for bio*/}
              <hr />
              <div className="w3-card w3-margin m-4">
                {" "}
                {/*card start for all popular posts elements*/}
                <div className="w3-container w3-padding">
                  {/*container start header popular posts */}
                  <h4>Popular Posts</h4>
                </div>
                {/*container end header popular posts */}
                <ul className="w3-ul w3-hoverable w3-white">
                  {/*list start popular posts */}
                  <li className="w3-padding-16">
                    {/*list-item-1 start popular posts */}
                    <img
                      src={Business}
                      alt="Business"
                      className="w3-left w3-margin-right"
                      style={{ width: "20%" }}
                    ></img>{" "}
                    <span className="w3-large">Style Option 1</span>
                    <br />
                    <span>Share Buttons</span>
                  </li>
                  {/*list-item-1 end popular posts */}
                  <li className="w3-padding-16">
                    {/*list-item-2 start popular posts */}
                    <img
                      src={Business}
                      alt="Business"
                      className="w3-left w3-margin-right"
                      style={{ width: "20%" }}
                    ></img>
                    <span className="w3-large">Style Option 2</span>
                    <br></br>
                    <span>Read More Button</span>
                  </li>
                  {/*list-item-2 end popular posts */}
                  <li className="w3-padding-16">
                    {/*list-item-3 start popular posts */}
                    <img
                      src={Business}
                      alt="Business"
                      className="w3-left w3-margin-right"
                      style={{ width: "20%" }}
                    ></img>
                    <span className="w3-large">Title</span>
                    <br></br>
                    <span>Sed mattis nunc</span>
                  </li>
                  {/*list-item-3 end popular posts */}
                  <li className="w3-padding-16 ">
                    {" "}
                    {/*list-item-4 start popular posts */}
                    <img
                      src={Business}
                      alt="Business"
                      className="w3-left w3-margin-right"
                      style={{ width: "20%" }}
                    ></img>
                    <span className="w3-large">Title</span>
                    <br />
                    <span>Sed mattis nunc</span>
                  </li>
                  {/*list-item-4 end popular posts */}
                </ul>
                {/*list end popular posts */}
              </div>
              {/*card end for all popular posts elements*/}
              <hr />
              <div className="w3-card w3-margin m-4">
                {" "}
                {/*card start for all tags elements*/}
                <div className="w3-container w3-padding">
                  {" "}
                  {/*container start for tags Header*/}
                  <h4>Tags</h4>
                </div>{" "}
                {/*container end for tags Header*/}
                <div className="w3-container w3-white">
                  {" "}
                  {/*container start for tags*/}
                  <p>
                    <span className="w3-tag w3-black w3-margin-bottom">
                     DESKTOP
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      COMPUTER
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                    BESTBUY
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      LAPTOP
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      TAGS
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      DESIGN
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      IDEAS
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      MONITOR
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      PORTFOLIO
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      NEWS
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      CODING
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      OFFICE
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      APPLICATION
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      SERVER
                    </span>
                  </p>
                </div>{" "}
                {/*container end for tags only*/}
              </div>{" "}
              {/*card end for all tags elements*/}
              {/*card end for all popular posts elements*/}
              {/*card end for all tags elements*/}
              <hr />
            </div>{" "}
         
            {/*col end for bio, popular posts & tags*/}
            {/*col start for all posts iteration */}
            <div className="w3-col p-4 l8 s12">
              <Posts />
              <PostsShare />
            </div>
            
            {/*col end for posts iteration */}
            <div>


            
                <div className="w3-container w3-content w3-padding-32  d-flex justify-content-center">
            <div className="w3-container px-5">
          <p className="text" style={{fontSize:'1.5rem'}}>
  <b> <AiTwotoneBulb style={{fontSize:'2.5rem'}}/> DID YOU KNOW ?</b>
                </p>
             
                <div className="w3-container px-lg-2">           
    <span >
        <TwitterShareButton >
            <div className="w3-button btn btn-xs text-white bg-black rounded">
                <FaTwitter style={{ color: "white" }} />
            </div>
        </TwitterShareButton>{" "}
        {/* end Twitter Share Button */}
    </span>
    <span className="mx-1">
        {/* start Facebook Share Button */}
        <FacebookShareButton >
            <div className="w3-button btn btn-xs text-white bg-primary rounded">
                <FaFacebook />
            </div>
        </FacebookShareButton>{" "}
        {/*end Facebook Share Button */}
    </span>
    <span className="mx-1">
        {/* start Pinterest Share Button */}
        <PinterestShareButton>
            <div className="w3-button btn btn-xs text-white rounded" style={{ backgroundColor: "red" }}>
                <FaPinterest style={{ color: "white" }} />
            </div>
        </PinterestShareButton>{" "}
        {/* end Pinterest Share Button */}
    </span>
    <span className="mx-1">
        {/* start Github Button */}
        <button className="w3-button btn btn-xs text-white rounded" style={{ backgroundColor: "#800080" }}>
            <FaGithub style={{ color: "white" }} />
        </button>
    </span>
   </div>
   
                    <span className="w3-tag w3-white w3-margin-bottom mx-3 px-5
                    "></span>{" "}
                    <br />
                    <span>
                      <ul>

                        <li>
                          Social share buttons increase sharing by 700% (Source:
                          ShareThis).
                        </li>
                        <li>
                          Content shared on social media generates 8 times more
                          engagement than content shared through other channels
                          (Source: QuickSprout).
                        </li>
                        <li>
                          Articles with share buttons get 7 times more mentions
                          than those without (Source: Buffer).
                        </li>
                        <li>
                          Tweets with share buttons get 2.5 times more clicks
                          than those without (Source: HubSpot).
                        </li>
                      </ul>
                    </span>
                    <span className="w3-light-grey w3-margin-bottom ">
                     <b>NOTE:</b> Share Buttons should be prominently displayed near the
                      content and, mobile friendly,
                    </span>
                    </div>
                </div>{" "}
                {/*container end for stats only*/}
              </div>
            </div>
          </div>{" "}
          {/*row end for the whole page with exception of header & footer */}
        </main>
    </div>
  );
};

export default Blog;
