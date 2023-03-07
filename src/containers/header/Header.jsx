import React, { useState } from 'react';
import { createImage } from '../../services/openAI/module/ImageGenerator';
import aiImage from '../../assets/ai.png';
import './header.css';

const Header = () => {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState(aiImage);
  const [loading, setLoading] = useState(false);
  const placeholder = "Search Bears with Paint Brushes the Starry Night, painted by Vincent Van Gogh..";

  const handleGenerateImage = async () => {
    try {
      setLoading(true);
      const response = await createImage(prompt);
      setResult(response.data.data[0].url);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        {loading ? (
          <>
            <h1 className="gradient__text">Generating..Please Wait..</h1>
            <div className="lds-ripple">
              <div></div>
              <div></div>
            </div>
          </>
        ) : (
          <>
            <h1 className="gradient__text">Generate an Image using Open AI API</h1>
          </>
        )}
        <div className="gpt3__header-content__input">
          <input
            type="imageDescription"
            placeholder={placeholder}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button type="button" onClick={handleGenerateImage}>
            Generate
          </button>
        </div>
      </div>

      <div className="gpt3__header-image">
        {result && <img className="result-image" src={result} alt="result" />}
      </div>
    </div>
  );
};

export default Header;
