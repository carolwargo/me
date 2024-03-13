import React, { useState } from 'react';
import ImageModal from '../../Modal/ImageModal';
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import Business from '../../../assets/images/About/Business.png';
import YogaSet from '../../../assets/images/YogaStory/YogaSet.png';
import ProductCampaign from '../../../assets/images/Graphics/ProductCampaign.png';
import LineUp from '../../../assets/images/Graphics/LineUp.png';
import MidSeason from '../../../assets/images/Graphics/MidSeason.png';
import CheckOut from '../../../assets/images/Graphics/CheckOut.png';
import Catching from '../../../assets/images/Graphics/Catching.png';
import Canceled from '../../../assets/images/Graphics/Canceled.png';
import CuttersFlyers from '../../../assets/images/Graphics/CuttersFlyers.png';
import NorthernGolf from '../../../assets/images/Graphics/NorthernGolf.png';
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';



const BusinessEssentials = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleModalOpen = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setSelectedImage(null);
    setShowModal(false);
  };
  return (
    <div className='container mt-4'>
      <div className="row graphics-container">
        {/* Business Image */}
        <div className="col-sm-12 col-md-4 col-lg-4 mb-2 d-flex justify-content-center align-items-center">
      <div className="graphics-body p-2 d-flex flex-column justify-content-center align-items-center">
        <div className="graphics-title">
              <img
                src={Business}
                alt="Business"
                className="mb-2 border border-black clickable-image"
                style={{ width: "100%", height: "auto", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}
                onClick={() => handleModalOpen(Business)}
              />
              <p style={{ fontSize: '12px', color: 'blue' }}><HiMagnifyingGlassPlus /> click image to enlarge</p>
              <h4>TITLE</h4>
            </div>
            <p className="business-essentials-text">
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto quidem rerum recusandae nulla alias voluptate eius temporibus cum beatae maxime pariatur ullam, aliquid, molestiae, repellendus enim consectetur vitae placeat tenetur?
            </p>
          </div>

          {/* ImageModal for Business Image */}
          <ImageModal
            showModal={showModal}
            handleModalClose={handleModalClose}
            imageSrc={selectedImage}
            altText="Enlarged Business Image"
            title="close"
          />
        </div>

        {/* Yoga Set Image */}
        <div className="col-sm-12 col-md-4 col-lg-4 mb-2 d-flex justify-content-center align-items-center">
      <div className="graphics-body p-2 d-flex flex-column justify-content-center align-items-center">
        <div className="graphics-title">
              <img
                src={YogaSet}
                alt="YogaSet"
                className="mb-2 border border-black clickable-image"
                style={{ width: "100%", height: "auto", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}
                onClick={() => handleModalOpen(YogaSet)}
              />
              <p style={{ fontSize: '12px', color: 'blue' }}><HiMagnifyingGlassPlus /> click image to enlarge</p>
              <h4>TITLE</h4>
            </div>
            <p className="business-essentials-text">
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto quidem rerum recusandae nulla alias voluptate eius temporibus cum beatae maxime pariatur ullam, aliquid, molestiae, repellendus enim consectetur vitae placeat tenetur?
            </p>
          </div>

          {/* ImageModal for Red Baseball Image */}
          <ImageModal
            showModal={showModal}
            handleModalClose={handleModalClose}
            imageSrc={selectedImage}
            altText="Enlarged Red Baseball Image"
            title="close"
          />
        </div>

        {/* Product Campaign Image */}
        <div className="col-sm-12 col-md-4 col-lg-4 mb-2 d-flex justify-content-center align-bottom">
          <div className="graphics-body p-2 justify-content-center align-bottom">
            <div className="graphics-title">
              <img
                src={ProductCampaign}
                alt="ProductCampaign"
                className="mb-2 border border-black clickable-image"
                style={{ width: "100%", height: "auto", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}
                onClick={() => handleModalOpen(ProductCampaign)}
              />
              <p style={{ fontSize: '12px', color: 'blue' }}><HiMagnifyingGlassPlus /> click image to enlarge</p>
              <h4>TITLE</h4>
            </div>
            <p className="business-essentials-text">
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto quidem rerum recusandae nulla alias voluptate eius temporibus cum beatae maxime pariatur ullam, aliquid, molestiae, repellendus enim consectetur vitae placeat tenetur?
            </p>
          </div>

          {/* ImageModal for Product Campaign Image */}
          <ImageModal
            showModal={showModal}
            handleModalClose={handleModalClose}
            imageSrc={selectedImage}
            altText="Enlarged Product Campaign Image"
            title="close"
          />
        </div>
      </div>




{/* second row */  }
   



    {/* third row */  }
    <div className="row graphics-container">
  {/* LineUp Image */}
  <div className="col-sm-12 col-md-4 col-lg-4 mb-2 d-flex justify-content-center align-bottom">
    <div className="graphics-body p-2 justify-content-center align-bottom">
      <div className="graphics-title">
        <img
          src={LineUp}
          alt="LineUp"
          className="mb-2 border border-black clickable-image"
          style={{ width: "100%", height: "auto", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}
          onClick={() => handleModalOpen(LineUp)}
        />
        <p style={{ fontSize: '12px', color: 'blue' }}><HiMagnifyingGlassPlus /> click image to enlarge</p>
        <h4>TITLE</h4>
      </div>
      <p className="business-essentials-text">
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto quidem rerum recusandae nulla alias voluptate eius temporibus cum beatae maxime pariatur ullam, aliquid, molestiae, repellendus enim consectetur vitae placeat tenetur?
      </p>
    </div>

    {/* ImageModal for LineUp Image */}
    <ImageModal
      showModal={showModal}
      handleModalClose={handleModalClose}
      imageSrc={selectedImage}
      altText="Enlarged LineUp Image"
      title="close"
    />
  </div>

  {/* CheckOut Image */}
  <div className="col-sm-12 col-md-4 col-lg-4 mb-2 d-flex justify-content-center align-bottom">
    <div className="graphics-body p-2 justify-content-center align-bottom">
      <div className="graphics-title">
        <img
          src={CheckOut}
          alt="CheckOut"
          className="mb-2 border border-black clickable-image"
          style={{ width: "100%", height: "auto", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}
          onClick={() => handleModalOpen(CheckOut)}
        />
        <p style={{ fontSize: '12px', color: 'blue' }}><HiMagnifyingGlassPlus /> click image to enlarge</p>
        <h4>TITLE</h4>
      </div>
      <p className="graphics-text">
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto quidem rerum recusandae nulla alias voluptate eius temporibus cum beatae maxime pariatur ullam, aliquid, molestiae, repellendus enim consectetur vitae placeat tenetur?
      </p>
    </div>

    {/* ImageModal for CheckOut Image */}
    <ImageModal
      showModal={showModal}
      handleModalClose={handleModalClose}
      imageSrc={selectedImage}
      altText="Enlarged CheckOut Image"
      title="close"
    />
  </div>

  {/* MidSeason Image */}
  <div className="col-sm-12 col-md-4 col-lg-4 mb-2 d-flex justify-content-center align-bottom">
    <div className="graphics-body p-2 justify-content-center align-bottom">
      <div className="graphics-title">
        <img
          src={MidSeason}
          alt="MidSeason"
          className="mb-2 border border-black clickable-image"
          style={{ width: "100%", height: "auto", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}
          onClick={() => handleModalOpen(MidSeason)}
        />
        <p style={{ fontSize: '12px', color: 'blue' }}><HiMagnifyingGlassPlus /> click image to enlarge</p>
        <h4>TITLE</h4>
      </div>
      <p className="business-essentials-text">
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto quidem rerum recusandae nulla alias voluptate eius temporibus cum beatae maxime pariatur ullam, aliquid, molestiae, repellendus enim consectetur vitae placeat tenetur?
      </p>
    </div>

    {/* ImageModal for MidSeason Image */}
    <ImageModal
      showModal={showModal}
      handleModalClose={handleModalClose}
      imageSrc={selectedImage}
      altText="Enlarged MidSeason Image"
      title="close"
    />
  </div>
</div>

     {/* fourth row */  }
   



{/*row 6 */}

<div className="row graphics-container">
  {/* CuttersFlyers Image */}
  <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-bottom">
    <div className="graphics-body p-2 justify-content-center align-bottom">
      <div className="graphics-title">
        <img
          src={CuttersFlyers}
          alt="CuttersFlyers"
          className="mb-2 border border-black clickable-image"
          style={{ width: "100%", height: "auto", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}
          onClick={() => handleModalOpen(CuttersFlyers)}
        />
        <p style={{ fontSize: '12px', color: 'blue' }}><HiMagnifyingGlassPlus /> click image to enlarge</p>
        <h4>TITLE</h4>
      </div>
      <p className="business-essentials-text">
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto quidem rerum recusandae nulla alias voluptate eius temporibus cum beatae maxime pariatur ullam, aliquid, molestiae, repellendus enim consectetur vitae placeat tenetur?
      </p>
    </div>

    {/* ImageModal for CuttersFlyers Image */}
    <ImageModal
      showModal={showModal}
      handleModalClose={handleModalClose}
      imageSrc={selectedImage}
      altText="Enlarged CuttersFlyers Image"
      title="close"
    />
  </div>

  {/* NorthernGolf Image */}
  <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-bottom">
    <div className="graphics-body p-2 justify-content-center align-bottom">
      <div className="graphics-title">
        <img
          src={NorthernGolf}
          alt="NorthernGolf"
          className="mb-2 border border-black clickable-image"
          style={{ width: "100%", height: "auto", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}
          onClick={() => handleModalOpen(NorthernGolf)}
        />
        <p style={{ fontSize: '12px', color: 'blue' }}><HiMagnifyingGlassPlus /> click image to enlarge</p>
        <h4>TITLE</h4>
      </div>
      <p className="graphics-text">
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto quidem rerum recusandae nulla alias voluptate eius temporibus cum beatae maxime pariatur ullam, aliquid, molestiae, repellendus enim consectetur vitae placeat tenetur?
      </p>
    </div>

    {/* ImageModal for NorthernGolf Image */}
    <ImageModal
      showModal={showModal}
      handleModalClose={handleModalClose}
      imageSrc={selectedImage}
      altText="Enlarged NorthernGolf Image"
      title="close"
    />
  </div>
</div>



<div className="row graphics-container">
  {/* Canceled Image */}
  <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-bottom">
    <div className="graphics-body p-2 justify-content-center align-bottom">
      <div className="graphics-title">
        <img
          src={Canceled}
          alt="Canceled"
          className="mb-2 border border-black clickable-image"
          style={{ width: "100%", height: "auto", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}
          onClick={() => handleModalOpen(Canceled)}
        />
        <p style={{ fontSize: '12px', color: 'blue' }}><HiMagnifyingGlassPlus /> click image to enlarge</p>
        <h4>TITLE</h4>
      </div>
      <p className="business-essentials-text">
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto quidem rerum recusandae nulla alias voluptate eius temporibus cum beatae maxime pariatur ullam, aliquid, molestiae, repellendus enim consectetur vitae placeat tenetur?
      </p>
    </div>

    {/* ImageModal for Canceled Image */}
    <ImageModal
      showModal={showModal}
      handleModalClose={handleModalClose}
      imageSrc={selectedImage}
      altText="Enlarged Canceled Image"
      title="close"
    />
  </div>

  {/* Catching Image */}
  <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-bottom">
    <div className="graphics-body p-2 justify-content-center align-bottom">
      <div className="graphics-title">
        <img
          src={Catching}
          alt="Catching"
          className="mb-2 border border-black clickable-image"
          style={{ width: "100%", height: "auto", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}
          onClick={() => handleModalOpen(Catching)}
        />
        <p style={{ fontSize: '12px', color: 'blue' }}><HiMagnifyingGlassPlus /> click image to enlarge</p>
        <h4>TITLE</h4>
      </div>
      <p className="graphics-text">
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto quidem rerum recusandae nulla alias voluptate eius temporibus cum beatae maxime pariatur ullam, aliquid, molestiae, repellendus enim consectetur vitae placeat tenetur?
      </p>
    </div>

    {/* ImageModal for Catching Image */}
    <ImageModal
      showModal={showModal}
      handleModalClose={handleModalClose}
      imageSrc={selectedImage}
      altText="Enlarged Catching Image"
      title="close"
    />
  </div>
</div>
 
     </div>
  );
};

export default BusinessEssentials;

