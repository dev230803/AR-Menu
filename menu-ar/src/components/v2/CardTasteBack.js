import React from "react";

const SpiceDots = ({ level }) => (
  <div className="v2-card-taste-spice" aria-label={`Spice level ${level} out of 5`}>
    {Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`v2-card-taste-spice-dot${i < level ? " filled" : ""}`}
      />
    ))}
  </div>
);

const CardTasteBack = ({ tasteProfile, dishName }) => {
  if (!tasteProfile) {
    return (
      <div className="v2-card-taste-back">
        <h4 className="v2-card-taste-heading">Taste Profile</h4>
        <p className="v2-card-taste-text">Profile not available yet.</p>
      </div>
    );
  }

  const { comparisonText, spiceLevel, textureTags } = tasteProfile;
  const tags = (textureTags || []).slice(0, 2);

  return (
    <div className="v2-card-taste-back">
      <h4 className="v2-card-taste-heading">Taste Profile</h4>
      <p className="v2-card-taste-text">{comparisonText}</p>
      <SpiceDots level={spiceLevel} />
      {tags.length > 0 && (
        <div className="v2-card-taste-tags">
          {tags.map((tag) => (
            <span key={tag} className="v2-card-taste-pill">
              {tag}
            </span>
          ))}
        </div>
      )}
      <p className="v2-card-taste-name">{dishName}</p>
    </div>
  );
};

export default CardTasteBack;
