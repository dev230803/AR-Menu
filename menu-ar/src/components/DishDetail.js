import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { dishes } from "../menuData";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import "../App.css";
import "@google/model-viewer";

Chart.register(ArcElement, Tooltip, Legend);

/**
 * Dimension Overlay Component
 * Renders dimension lines and labels for 3D preview
 */
const DimensionOverlay = ({ dimension }) => {
  if (!dimension) return null;

  const getOverlayStyle = () => {
    const baseStyle = {
      position: "absolute",
      pointerEvents: "none",
      zIndex: 10,
    };

    switch (dimension.type) {
      case "horizontal":
        return {
          ...baseStyle,
          top: "50%",
          left: "20%",
          right: "20%",
          height: "1.5px",
          borderTop: "1.5px solid #81c784",
        };
      case "vertical":
        return {
          ...baseStyle,
          left: "50%",
          top: "30%",
          bottom: "30%",
          width: "1.5px",
          borderLeft: "1.5px solid #81c784",
        };
      case "diameter":
        return {
          ...baseStyle,
          top: "50%",
          left: "20%",
          right: "20%",
          height: "1.5px",
          borderTop: "1.5px solid #81c784",
        };
      default:
        return baseStyle;
    }
  };

  const getLabelStyle = () => {
    const baseStyle = {
      position: "absolute",
      background: "rgba(129, 199, 132, 0.5)",
      color: "#fff",
      padding: "4px 8px",
      borderRadius: "4px",
      fontSize: "12px",
      fontWeight: 600,
      whiteSpace: "nowrap",
      pointerEvents: "none",
      zIndex: 11,
    };

    switch (dimension.type) {
      case "horizontal":
        return {
          ...baseStyle,
          top: "48%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        };
      case "vertical":
        return {
          ...baseStyle,
          left: "52%",
          top: "50%",
          transform: "translateY(-50%)",
        };
      case "diameter":
        return {
          ...baseStyle,
          top: "48%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        };
      default:
        return baseStyle;
    }
  };

  const getEndpointsStyle = () => {
    const endpointStyle = {
      position: "absolute",
      width: "7px",
      height: "7px",
      background: "#81c784",
      borderRadius: "50%",
      border: "1.5px solid #fff",
      pointerEvents: "none",
      zIndex: 11,
    };

    switch (dimension.type) {
      case "horizontal":
        return {
          start: {
            ...endpointStyle,
            top: "49%",
            left: "20%",
            transform: "translate(-50%, -50%)",
          },
          end: {
            ...endpointStyle,
            top: "49%",
            right: "20%",
            transform: "translate(50%, -50%)",
          },
        };
      case "vertical":
        return {
          start: {
            ...endpointStyle,
            left: "49%",
            top: "30%",
            transform: "translate(-50%, -50%)",
          },
          end: {
            ...endpointStyle,
            left: "49%",
            bottom: "30%",
            transform: "translate(-50%, 50%)",
          },
        };
      case "diameter":
        return {
          start: {
            ...endpointStyle,
            top: "49%",
            left: "20%",
            transform: "translate(-50%, -50%)",
          },
          end: {
            ...endpointStyle,
            top: "49%",
            right: "20%",
            transform: "translate(50%, -50%)",
          },
        };
      default:
        return { start: endpointStyle, end: endpointStyle };
    }
  };

  const endpoints = getEndpointsStyle();

  return (
    <>
      <div style={getOverlayStyle()}></div>
      <div style={getLabelStyle()}>{dimension.valueCm} cm</div>
      <div style={endpoints.start}></div>
      <div style={endpoints.end}></div>
    </>
  );
};

const DishDetail = () => {
  const { dishId } = useParams();
  const [show3D, setShow3D] = useState(false);
  const [showDimensions, setShowDimensions] = useState(true);
  const [showARHint, setShowARHint] = useState(false);
  const [hintShownInSession, setHintShownInSession] = useState(false);
  const modelViewerRef = useRef(null);
  const hintTimeoutRef = useRef(null);
  const dish = dishes.find((d) => d.id === dishId);

  // Setup AR hint logic - simplified to only use ar-status event
  // useEffect(() => {
  //   if (!show3D) {
  //     // Reset when modal closes
  //     setShowARHint(false);
  //     setHintShownInSession(false);
  //     if (hintTimeoutRef.current) {
  //       clearTimeout(hintTimeoutRef.current);
  //     }
  //     return;
  //   }

  //   // Wait for model-viewer to be available
  //   const setupARListener = () => {
  //     const modelViewer = modelViewerRef.current;
  //     if (!modelViewer) {
  //       // Retry after a short delay if model-viewer isn't ready
  //       setTimeout(setupARListener, 100);
  //       return;
  //     }

  //     // Remove existing listener if any
  //     if (modelViewer.__arStatusHandler) {
  //       modelViewer.removeEventListener(
  //         "ar-status",
  //         modelViewer.__arStatusHandler
  //       );
  //     }

  //     const handleARStatus = (event) => {
  //       const status = event.detail.status;

  //       // Show hint when AR session starts
  //       if (status === "session-started") {
  //         setShowARHint(true);
  //         setHintShownInSession(true);

  //         // Clear any existing timeout
  //         if (hintTimeoutRef.current) {
  //           clearTimeout(hintTimeoutRef.current);
  //         }

  //         // Auto-hide after 4 seconds
  //         hintTimeoutRef.current = setTimeout(() => {
  //           setShowARHint(false);
  //         }, 4000);
  //       }

  //       // Hide hint when AR session ends
  //       if (status === "not-presenting") {
  //         setShowARHint(false);
  //         setHintShownInSession(false);
  //         if (hintTimeoutRef.current) {
  //           clearTimeout(hintTimeoutRef.current);
  //         }
  //       }
  //     };

  //     // Listen for AR status changes
  //     modelViewer.addEventListener("ar-status", handleARStatus);

  //     // Store handler for cleanup
  //     modelViewer.__arStatusHandler = handleARStatus;
  //   };

  //   setupARListener();

  //   // Cleanup
  //   return () => {
  //     const modelViewer = modelViewerRef.current;
  //     if (modelViewer && modelViewer.__arStatusHandler) {
  //       modelViewer.removeEventListener(
  //         "ar-status",
  //         modelViewer.__arStatusHandler
  //       );
  //       delete modelViewer.__arStatusHandler;
  //     }
  //     if (hintTimeoutRef.current) {
  //       clearTimeout(hintTimeoutRef.current);
  //     }
  //   };
  // }, [show3D]);
  if (!dish) return <div>Dish not found</div>;
  const nutrition = dish.nutrition;
  const data = {
    labels: ["Protein", "Carbs", "Fat"],
    datasets: [
      {
        data: [nutrition.protein, nutrition.carbs, nutrition.fat],
        backgroundColor: ["#4caf50", "#2196f3", "#ff9800"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="menu-card" style={{ position: "relative", paddingTop: 24 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 18,
        }}
      >
        <h2
          className="menu-title"
          style={{ margin: 0, textAlign: "center", fontSize: "1.5rem" }}
        >
          {dish.name}
        </h2>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <div
          className="dish-description"
          style={{ textAlign: "center", fontSize: "1.1rem", marginBottom: 4 }}
        >
          {dish.description}
        </div>
        <div
          className="dish-price-detail"
          style={{
            fontSize: "1.15rem",
            color: "#b47b2b",
            fontWeight: 600,
            marginBottom: 8,
          }}
        >
          Price: ₹{dish.price.toFixed(2)}
        </div>
        <img
          src={dish.image}
          alt={dish.name}
          style={{
            width: "100%",
            maxWidth: 320,
            borderRadius: 12,
            marginBottom: 16,
            boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
          }}
        />
        <button
          className="ar-btn"
          style={{
            margin: "12px 0 0 0",
            padding: "12px 28px",
            fontSize: 16,
            minWidth: 120,
            display: "block",
            background: "linear-gradient(90deg, #43e97b 0%, #38f9d7 100%)",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            boxShadow: "0 2px 8px rgba(67,233,123,0.13)",
            fontWeight: 600,
            letterSpacing: 0.5,
            cursor: "pointer",
            transition: "background 0.2s",
            alignSelf: "center",
          }}
          onClick={() => {
            setShow3D(true);
            setShowARHint(true);

            setTimeout(() => {
              setShowARHint(false);
            }, 4000);
          }}
        >
          View in 3D
        </button>
      </div>
      <div
        className="nutrition-section"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3>Nutrition</h3>
        <div style={{ maxWidth: 220, width: "100%" }}>
          <Pie data={data} />
        </div>
      </div>
      <div
        style={{
          marginTop: 18,
          textAlign: "center",
          fontSize: "1.08rem",
          color: "#5a4327",
          fontWeight: 500,
          background: "#fff9f3",
          borderRadius: 8,
          padding: "10px 0",
        }}
      >
        Quantity served: {dish.quantity}
      </div>
      {/* 3D/AR Modal */}
      {show3D && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.7)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: 12,
              padding: 12,
              maxWidth: 400,
              width: "95vw",
              maxHeight: "90vh",
              boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            <button
              onClick={() => {
                setShow3D(false);
                setShowDimensions(true); // Reset dimensions visibility
                setShowARHint(false); // Hide AR hint
                setHintShownInSession(false); // Reset hint state
                if (hintTimeoutRef.current) {
                  clearTimeout(hintTimeoutRef.current);
                }
              }}
              style={{
                position: "absolute",
                top: 8,
                right: 12,
                background: "transparent",
                border: "none",
                fontSize: 28,
                color: "#333",
                cursor: "pointer",
                zIndex: 2,
              }}
              aria-label="Close 3D viewer"
            >
              ×
            </button>
            {/* Hide/Show Dimensions Button */}
            {dish.dimension && (
              <button
                onClick={() => setShowDimensions(!showDimensions)}
                style={{
                  position: "absolute",
                  top: 8,
                  left: 12,
                  background: "rgba(255, 255, 255, 0.9)",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  padding: "6px 10px",
                  fontSize: "12px",
                  color: "#666",
                  cursor: "pointer",
                  zIndex: 2,
                  fontWeight: 500,
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.9)";
                }}
                aria-label={
                  showDimensions ? "Hide dimensions" : "Show dimensions"
                }
              >
                {showDimensions ? "Hide Dimension" : "Show Dimension"}
              </button>
            )}
            <div style={{ position: "relative", width: "100%" }}>
              <model-viewer
                ref={modelViewerRef}
                src={dish.model}
                ios-src={dish.modelIOS}
                ar
                ar-modes="webxr scene-viewer quick-look"
                camera-controls
                auto-rotate
                style={{
                  width: "100%",
                  height: "60vw",
                  maxWidth: 350,
                  maxHeight: 350,
                  background: "#f7f7f7",
                  borderRadius: 8,
                }}
                alt={`3D model of ${dish.name}`}
                shadow-intensity="1"
                exposure="1.1"
              ></model-viewer>
              {/* Dimension overlay - only show when enabled and not in AR */}
              {dish.dimension && showDimensions && !showARHint && (
                <DimensionOverlay dimension={dish.dimension} />
              )}
            </div>
            {/* AR Onboarding Hint Overlay */}
            {showARHint && (
              <ARHintOverlay onDismiss={() => setShowARHint(false)} />
            )}
            <div
              style={{
                marginTop: 8,
                color: "#4caf50",
                fontWeight: 600,
                fontSize: 14,
                textAlign: "center",
                padding: "0 10px",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              {
                <div>
                  {dish.dimension.label}: {dish.dimension.valueCm} cm
                </div>
              }
              <div>Tap the AR icon to view in your space!</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/**
 * AR Hint Overlay Component
 * Shows onboarding instructions when AR mode starts
 */
const ARHintOverlay = ({ onDismiss }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0, 0, 0, 0.75)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10000,
        padding: "20px",
        pointerEvents: "auto",
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.95)",
          borderRadius: "12px",
          padding: "20px 24px",
          maxWidth: "280px",
          textAlign: "center",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div
          style={{
            fontSize: "16px",
            fontWeight: 600,
            color: "#333",
            marginBottom: "12px",
          }}
        >
          Getting Started with AR
        </div>
        <div
          style={{
            fontSize: "14px",
            color: "#666",
            lineHeight: "1.5",
            marginBottom: "8px",
          }}
        >
          Point your phone at a flat surface
        </div>
        <div
          style={{
            fontSize: "14px",
            color: "#666",
            lineHeight: "1.5",
          }}
        >
          Move slowly to detect the surface
        </div>
        <button
          onClick={onDismiss}
          style={{
            marginTop: "16px",
            padding: "8px 20px",
            background: "#4caf50",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontSize: "14px",
            fontWeight: 600,
            cursor: "pointer",
            width: "100%",
          }}
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export default DishDetail;
