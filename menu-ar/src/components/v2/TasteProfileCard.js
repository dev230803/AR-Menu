import React from "react";

const FLAVOR_LABELS = [
  { key: "spicy", label: "Spicy", color: "#e65100" },
  { key: "sweet", label: "Sweet", color: "#ec407a" },
  { key: "sour", label: "Sour", color: "#f9a825" },
  { key: "savory", label: "Savory", color: "#558b2f" },
];

const SpiceBar = ({ level }) => (
  <div className="v2-taste-spice-bar" aria-label={`Spice level ${level} out of 5`}>
    {Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`v2-taste-spice-segment${i < level ? " filled" : ""}`}
      />
    ))}
  </div>
);

const FlavorMeter = ({ label, value, color }) => (
  <div className="v2-taste-flavor-row">
    <span className="v2-taste-flavor-label">{label}</span>
    <div className="v2-taste-flavor-track">
      <div
        className="v2-taste-flavor-fill"
        style={{ width: `${(value / 5) * 100}%`, background: color }}
      />
    </div>
    <span className="v2-taste-flavor-value">{value}</span>
  </div>
);

const TasteProfileCard = ({ tasteProfile }) => {
  if (!tasteProfile) return null;

  const { comparisonText, spiceLevel, flavors, textureTags } = tasteProfile;

  return (
    <div className="v2-detail-taste-profile">
      <h3>Taste Profile</h3>

      <div className="v2-taste-comparison">
        <span className="v2-taste-comparison-label">What it tastes like</span>
        <p className="v2-taste-comparison-text">{comparisonText}</p>
      </div>

      {textureTags?.length > 0 && (
        <div className="v2-taste-textures">
          {textureTags.map((tag) => (
            <span key={tag} className="v2-taste-texture-pill">
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="v2-taste-spice">
        <span className="v2-taste-spice-label">Spice level</span>
        <SpiceBar level={spiceLevel} />
      </div>

      <div className="v2-taste-flavors">
        {FLAVOR_LABELS.map(({ key, label, color }) => (
          <FlavorMeter key={key} label={label} value={flavors[key]} color={color} />
        ))}
      </div>
    </div>
  );
};

export default TasteProfileCard;
