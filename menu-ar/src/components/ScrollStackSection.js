import React from "react";
import ScrollStack, { ScrollStackItem } from "../components/ScrollStack";
import "./ScrollStackCSS.css";

function ScrollStackSection() {
  return (
    <section id="scrollstack" className="scroll-stack-section">
      <div className="scroll-stack-container">
        {/* Section Heading */}
        <div className="section-header">
          <h2 className="section-title">
            Why Restaurants are Switching to 3D Menus
          </h2>
          <p className="section-subtitle">
            Discover the powerful benefits that are transforming the dining
            industry
          </p>
        </div>

        {/* Scroll Stack Container with Fixed Height */}
        <div className="scroll-stack-viewport">
          <ScrollStack
            useWindowScroll={false}
            itemDistance={110}
            itemScale={0.03}
            itemStackDistance={28}
            baseScale={0.84}
          >
            <ScrollStackItem itemClassName="scroll-card-1">
              <div className="card-content">
                <img
                  src="/Why/1_ar_happy_cstomer.png"
                  alt="Happy Customers"
                  className="card-image"
                />
                <h3 className="card-title">
                  No Confusion, Only Happy Customers
                </h3>
                <p className="card-description">
                  Let diners see dishes exactly how they'll appear — no
                  surprises, no doubts. 3D visuals help customers order faster
                  and feel confident.
                </p>
              </div>
            </ScrollStackItem>
            <ScrollStackItem itemClassName="scroll-card-2">
              <div className="card-content">
                <img
                  src="/Why/2_Increasing-your-sales.jpg"
                  alt="Increasing Sales"
                  className="card-image"
                />
                <h3 className="card-title">Sales That Serve Themselves</h3>
                <p className="card-description">
                  Mouthwatering 3D previews turn curiosity into conversions —
                  helping you upsell effortlessly and boost average order value.
                </p>
              </div>
            </ScrollStackItem>
            <ScrollStackItem itemClassName="scroll-card-3">
              <div className="card-content">
                <img
                  src="/Why/3_competitive_adv.png"
                  alt="Competitive Advantage"
                  className="card-image"
                />
                <h3 className="card-title">
                  Your Restaurant, Ahead of the Curve
                </h3>
                <p className="card-description">
                  Stand out in a crowded market with next-gen AR technology that
                  guests remember and talk about.
                </p>
              </div>
            </ScrollStackItem>
            <ScrollStackItem itemClassName="scroll-card-4">
              <div className="card-content">
                <img
                  src="/Why/4_genz.jpg"
                  alt="Gen Z Appeal"
                  className="card-image"
                />
                <h3 className="card-title">Built for Gen Z and Beyond</h3>
                <p className="card-description">
                  Attract a new generation of digital-first diners who love
                  interactive, tech-driven experiences.
                </p>
              </div>
            </ScrollStackItem>
            <ScrollStackItem itemClassName="scroll-card-5">
              <div className="card-content">
                <img
                  src="/Why/5_germfree.png"
                  alt="Contactless Menu"
                  className="card-image"
                />
                <h3 className="card-title">Contactless and Germ-Free</h3>
                <p className="card-description">
                  Guests explore menus without touching shared surfaces — safe,
                  seamless, and hygienic.
                </p>
              </div>
            </ScrollStackItem>
            <ScrollStackItem itemClassName="scroll-card-6">
              <div className="card-content">
                <img
                  src="/Why/6_eco_friendly.jfif"
                  alt="Eco-Friendly"
                  className="card-image"
                />
                <h3 className="card-title">Eco-Friendly Dining</h3>
                <p className="card-description">
                  Go green with paperless menus — no printing, no waste, just
                  pixels.
                </p>
              </div>
            </ScrollStackItem>
            <ScrollStackItem itemClassName="scroll-card-7">
              <div className="card-content">
                <img
                  src="/Why/7_insights.jfif"
                  alt="Analytics & Insights"
                  className="card-image"
                />
                <h3 className="card-title">Analytics & Insights That Matter</h3>
                <p className="card-description">
                  Track which dishes get the most views and use data to make
                  smarter menu decisions.
                </p>
              </div>
            </ScrollStackItem>
            <ScrollStackItem itemClassName="scroll-card-8">
              <div className="card-content">
                <img
                  src="/Why/8_updates.png"
                  alt="Instant Updates"
                  className="card-image"
                />
                <h3 className="card-title">
                  Instant Updates, Real-Time Changes
                </h3>
                <p className="card-description">
                  Change menus, prices, or items instantly across locations — no
                  reprints needed.
                </p>
              </div>
            </ScrollStackItem>
          </ScrollStack>
        </div>
      </div>
    </section>
  );
}

export default ScrollStackSection;
