---
title: "Basement Waterproofing Cost Per Square Foot Calculator | Toronto GTA"
description: "Calculate basement waterproofing costs per square foot for Toronto & GTA. Compare interior vs exterior costs, get localized pricing, and discover rebate opportunities."
date: 2025-01-31
draft: false
type: "tools"
---

# Basement Waterproofing Cost Per Square Foot Calculator

Get precise cost-per-square-foot estimates for basement waterproofing in Toronto and the GTA. Our advanced calculator considers foundation type, current conditions, and local pricing variations.

**Related Tools**: Try our [perimeter-based waterproofing calculator](/tools/waterproofing-cost-calculator/) for linear foot estimates, or explore our [ROI calculator](/tools/waterproofing-roi-calculator/) to understand your investment returns.

<div id="sqft-calculator" class="sqft-calculator-container">
    <div class="calculator-header">
        <h2>Calculate Cost Per Square Foot</h2>
        <p>Get localized pricing based on your basement's specific characteristics</p>
        <div class="progress-bar">
            <div class="progress-fill" id="progress-bar"></div>
        </div>
        <span class="progress-text" id="progress-text">Step 1 of 6</span>
    </div>

    <form id="sqft-calc-form" class="sqft-calculator-form">
        <!-- Step 1: Location -->
        <div class="calc-step active" data-step="1">
            <h3>📍 What's your location?</h3>
            <p class="step-description">Pricing varies across the GTA based on local costs and regulations</p>
            <div class="location-grid">
                <label class="location-option">
                    <input type="radio" name="location" value="toronto-central" data-multiplier="1.15">
                    <div class="location-content">
                        <strong>Toronto Central</strong>
                        <span>Downtown, Midtown, The Beaches</span>
                        <span class="price-indicator">Premium Pricing (+15%)</span>
                    </div>
                </label>
                <label class="location-option">
                    <input type="radio" name="location" value="toronto-north" data-multiplier="1.1" checked>
                    <div class="location-content">
                        <strong>North York & Suburbs</strong>
                        <span>North York, Scarborough, Etobicoke</span>
                        <span class="price-indicator">Standard Pricing (+10%)</span>
                    </div>
                </label>
                <label class="location-option">
                    <input type="radio" name="location" value="mississauga" data-multiplier="1.05">
                    <div class="location-content">
                        <strong>Mississauga</strong>
                        <span>All Mississauga areas</span>
                        <span class="price-indicator">Competitive Pricing (+5%)</span>
                    </div>
                </label>
                <label class="location-option">
                    <input type="radio" name="location" value="brampton" data-multiplier="1.0">
                    <div class="location-content">
                        <strong>Brampton</strong>
                        <span>All Brampton areas</span>
                        <span class="price-indicator">Base Pricing</span>
                    </div>
                </label>
                <label class="location-option">
                    <input type="radio" name="location" value="markham" data-multiplier="1.08">
                    <div class="location-content">
                        <strong>Markham</strong>
                        <span>Markham & Richmond Hill</span>
                        <span class="price-indicator">Standard Pricing (+8%)</span>
                    </div>
                </label>
                <label class="location-option">
                    <input type="radio" name="location" value="vaughan" data-multiplier="1.06">
                    <div class="location-content">
                        <strong>Vaughan</strong>
                        <span>Vaughan & Woodbridge</span>
                        <span class="price-indicator">Competitive Pricing (+6%)</span>
                    </div>
                </label>
            </div>
        </div>

        <!-- Step 2: Basement Size -->
        <div class="calc-step" data-step="2">
            <h3>📐 What's your basement square footage?</h3>
            <p class="step-description">Enter your basement dimensions or total square footage</p>
            
            <div class="size-input-tabs">
                <button type="button" class="tab-btn active" onclick="switchSizeMethod('dimensions')">Enter Dimensions</button>
                <button type="button" class="tab-btn" onclick="switchSizeMethod('sqft')">Enter Square Feet</button>
            </div>

            <div id="dimensions-input" class="size-method active">
                <div class="dimension-inputs">
                    <div class="input-group">
                        <label for="length">Length (feet)</label>
                        <input type="number" id="length" min="8" max="100" value="30" step="0.5">
                    </div>
                    <div class="input-group">
                        <label for="width">Width (feet)</label>
                        <input type="number" id="width" min="8" max="100" value="25" step="0.5">
                    </div>
                </div>
                <div class="sqft-display">
                    <span>Total Area: </span>
                    <strong id="calculated-sqft">750</strong> sq ft
                </div>
            </div>

            <div id="sqft-input" class="size-method">
                <div class="input-group">
                    <label for="manual-sqft">Square Footage</label>
                    <input type="number" id="manual-sqft" min="100" max="5000" value="750" step="50">
                </div>
            </div>

            <div class="size-reference">
                <h4>Size Reference Guide:</h4>
                <div class="size-examples">
                    <div class="size-example">
                        <strong>Small:</strong> 400-800 sq ft
                        <span>Typical bungalow or small semi</span>
                    </div>
                    <div class="size-example">
                        <strong>Medium:</strong> 800-1,200 sq ft
                        <span>Average detached home</span>
                    </div>
                    <div class="size-example">
                        <strong>Large:</strong> 1,200+ sq ft
                        <span>Large home or multiple areas</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Step 3: Foundation Type -->
        <div class="calc-step" data-step="3">
            <h3>🏗️ What type of foundation do you have?</h3>
            <p class="step-description">Foundation type affects waterproofing complexity and cost</p>
            <div class="foundation-grid">
                <label class="foundation-option">
                    <input type="radio" name="foundation" value="poured-concrete" data-multiplier="1.0" checked>
                    <div class="foundation-content">
                        <strong>Poured Concrete</strong>
                        <span>Most common, easier to waterproof</span>
                        <span class="cost-impact">Base Cost</span>
                    </div>
                </label>
                <label class="foundation-option">
                    <input type="radio" name="foundation" value="concrete-block" data-multiplier="1.2">
                    <div class="foundation-content">
                        <strong>Concrete Block (CMU)</strong>
                        <span>Hollow blocks, more sealing required</span>
                        <span class="cost-impact">+20% Cost</span>
                    </div>
                </label>
                <label class="foundation-option">
                    <input type="radio" name="foundation" value="stone-foundation" data-multiplier="1.4">
                    <div class="foundation-content">
                        <strong>Stone Foundation</strong>
                        <span>Older homes, complex waterproofing</span>
                        <span class="cost-impact">+40% Cost</span>
                    </div>
                </label>
                <label class="foundation-option">
                    <input type="radio" name="foundation" value="brick-foundation" data-multiplier="1.3">
                    <div class="foundation-content">
                        <strong>Brick Foundation</strong>
                        <span>Heritage homes, requires special care</span>
                        <span class="cost-impact">+30% Cost</span>
                    </div>
                </label>
            </div>
        </div>

        <!-- Step 4: Current Condition -->
        <div class="calc-step" data-step="4">
            <h3>🔍 What's the current condition?</h3>
            <p class="step-description">Existing issues affect the scope and cost of waterproofing</p>
            <div class="condition-grid">
                <label class="condition-option">
                    <input type="radio" name="condition" value="preventive" data-multiplier="1.0" checked>
                    <div class="condition-content">
                        <strong>Preventive (Dry)</strong>
                        <span>No current issues, preventive measure</span>
                        <span class="cost-impact">Base Cost</span>
                    </div>
                </label>
                <label class="condition-option">
                    <input type="radio" name="condition" value="minor-dampness" data-multiplier="1.1">
                    <div class="condition-content">
                        <strong>Minor Dampness</strong>
                        <span>Slight moisture, no active leaks</span>
                        <span class="cost-impact">+10% Cost</span>
                    </div>
                </label>
                <label class="condition-option">
                    <input type="radio" name="condition" value="active-seepage" data-multiplier="1.25">
                    <div class="condition-content">
                        <strong>Active Seepage</strong>
                        <span>Water coming through walls/floor</span>
                        <span class="cost-impact">+25% Cost</span>
                    </div>
                </label>
                <label class="condition-option">
                    <input type="radio" name="condition" value="severe-flooding" data-multiplier="1.5">
                    <div class="condition-content">
                        <strong>Flooding History</strong>
                        <span>Regular flooding, major remediation needed</span>
                        <span class="cost-impact">+50% Cost</span>
                    </div>
                </label>
            </div>
        </div>

        <!-- Step 5: Service Type -->
        <div class="calc-step" data-step="5">
            <h3>🛠️ What type of waterproofing do you need?</h3>
            <p class="step-description">Choose the waterproofing approach that best fits your situation</p>
            <div class="service-grid">
                <label class="service-option">
                    <input type="radio" name="service-type" value="interior" data-base-cost="15" checked>
                    <div class="service-content">
                        <strong>Interior Waterproofing</strong>
                        <span>Inside work only, less invasive</span>
                        <span class="cost-per-sqft">$12-18 per sq ft</span>
                        <div class="service-features">
                            <span>✓ No excavation required</span>
                            <span>✓ Can work year-round</span>
                            <span>✓ Minimal landscaping disruption</span>
                        </div>
                    </div>
                </label>
                <label class="service-option">
                    <input type="radio" name="service-type" value="exterior" data-base-cost="25">
                    <div class="service-content">
                        <strong>Exterior Waterproofing</strong>
                        <span>Outside excavation, most comprehensive</span>
                        <span class="cost-per-sqft">$20-30 per sq ft</span>
                        <div class="service-features">
                            <span>✓ Best long-term protection</span>
                            <span>✓ Addresses root cause</span>
                            <span>✓ Includes foundation repair</span>
                        </div>
                    </div>
                </label>
                <label class="service-option">
                    <input type="radio" name="service-type" value="combination" data-base-cost="35">
                    <div class="service-content">
                        <strong>Combination System</strong>
                        <span>Interior + exterior for maximum protection</span>
                        <span class="cost-per-sqft">$30-40 per sq ft</span>
                        <div class="service-features">
                            <span>✓ Ultimate protection</span>
                            <span>✓ Redundant systems</span>
                            <span>✓ Best for severe cases</span>
                        </div>
                    </div>
                </label>
            </div>
        </div>

        <!-- Step 6: Additional Features -->
        <div class="calc-step" data-step="6">
            <h3>➕ Select additional features</h3>
            <p class="step-description">These additions can enhance your waterproofing system</p>
            <div class="features-grid">
                <label class="feature-option">
                    <input type="checkbox" name="features" value="sump-pump" data-cost-per-sqft="2.5">
                    <div class="feature-content">
                        <strong>Sump Pump System</strong>
                        <span>Essential for water management</span>
                        <span class="feature-cost">+$2-3 per sq ft</span>
                    </div>
                </label>
                <label class="feature-option">
                    <input type="checkbox" name="features" value="backup-power" data-cost-per-sqft="1.5">
                    <div class="feature-content">
                        <strong>Battery Backup</strong>
                        <span>Power outage protection</span>
                        <span class="feature-cost">+$1-2 per sq ft</span>
                    </div>
                </label>
                <label class="feature-option">
                    <input type="checkbox" name="features" value="dehumidifier" data-cost-per-sqft="2">
                    <div class="feature-content">
                        <strong>Whole-Home Dehumidifier</strong>
                        <span>Humidity control system</span>
                        <span class="feature-cost">+$1.5-2.5 per sq ft</span>
                    </div>
                </label>
                <label class="feature-option">
                    <input type="checkbox" name="features" value="floor-coating" data-cost-per-sqft="3">
                    <div class="feature-content">
                        <strong>Epoxy Floor Coating</strong>
                        <span>Waterproof, durable finish</span>
                        <span class="feature-cost">+$2.5-3.5 per sq ft</span>
                    </div>
                </label>
                <label class="feature-option">
                    <input type="checkbox" name="features" value="french-drain" data-cost-per-sqft="4">
                    <div class="feature-content">
                        <strong>French Drain System</strong>
                        <span>Perimeter drainage upgrade</span>
                        <span class="feature-cost">+$3-5 per sq ft</span>
                    </div>
                </label>
                <label class="feature-option">
                    <input type="checkbox" name="features" value="vapor-barrier" data-cost-per-sqft="1">
                    <div class="feature-content">
                        <strong>Vapor Barrier</strong>
                        <span>Advanced moisture protection</span>
                        <span class="feature-cost">+$0.75-1.25 per sq ft</span>
                    </div>
                </label>
            </div>
        </div>

        <!-- Navigation -->
        <div class="calc-navigation">
            <button type="button" class="calc-btn prev" onclick="previousStep()">← Previous</button>
            <button type="button" class="calc-btn next" onclick="nextStep()">Next →</button>
            <button type="button" class="calc-btn calculate" onclick="calculateSqftCost()" style="display:none;">Calculate Cost 🧮</button>
        </div>
    </form>

    <!-- Results Section -->
    <div id="sqft-results" class="calculator-results" style="display:none;">
        <div class="results-header">
            <h2>🎯 Your Cost Per Square Foot Estimate</h2>
            <div class="location-badge" id="location-badge"></div>
        </div>
        
        <div class="cost-summary">
            <div class="cost-per-sqft">
                <span class="label">Cost Per Square Foot:</span>
                <div class="sqft-range">
                    <span class="min-sqft">$<span id="min-sqft">0</span></span>
                    <span class="separator">to</span>
                    <span class="max-sqft">$<span id="max-sqft">0</span></span>
                </div>
                <div class="sqft-subtext">per square foot</div>
            </div>

            <div class="total-cost">
                <span class="label">Total Project Cost:</span>
                <div class="total-range">
                    <span class="total-min">$<span id="total-min">0</span></span>
                    <span class="separator">to</span>
                    <span class="total-max">$<span id="total-max">0</span></span>
                </div>
                <div class="area-info"><span id="project-sqft">0</span> sq ft basement</div>
            </div>
        </div>

        <div class="comparison-chart">
            <h3>📊 How Does This Compare?</h3>
            <div class="comparison-bars">
                <div class="comparison-item">
                    <span class="comparison-label">Toronto Average</span>
                    <div class="comparison-bar">
                        <div class="comparison-fill toronto-avg"></div>
                        <span class="comparison-value">$18-28/sq ft</span>
                    </div>
                </div>
                <div class="comparison-item">
                    <span class="comparison-label">Your Estimate</span>
                    <div class="comparison-bar">
                        <div class="comparison-fill your-estimate" id="your-comparison"></div>
                        <span class="comparison-value" id="your-range"></span>
                    </div>
                </div>
                <div class="comparison-item">
                    <span class="comparison-label">Premium Range</span>
                    <div class="comparison-bar">
                        <div class="comparison-fill premium-range"></div>
                        <span class="comparison-value">$35-50/sq ft</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="cost-breakdown-detailed">
            <h3>💰 Detailed Cost Breakdown</h3>
            <div class="breakdown-cards">
                <div class="breakdown-card">
                    <h4>Base Waterproofing</h4>
                    <div class="breakdown-details" id="base-breakdown"></div>
                </div>
                <div class="breakdown-card" id="multipliers-card" style="display:none;">
                    <h4>Cost Adjustments</h4>
                    <div class="breakdown-details" id="multipliers-breakdown"></div>
                </div>
                <div class="breakdown-card" id="features-card" style="display:none;">
                    <h4>Additional Features</h4>
                    <div class="breakdown-details" id="features-breakdown"></div>
                </div>
            </div>
        </div>

        <div class="rebate-opportunities">
            <h3>💸 Available Rebates & Incentives</h3>
            <div class="rebate-grid">
                <div class="rebate-card">
                    <div class="rebate-amount">Up to $1,750</div>
                    <div class="rebate-title">Sump Pump Rebate</div>
                    <div class="rebate-desc">City of Toronto subsidy program</div>
                </div>
                <div class="rebate-card">
                    <div class="rebate-amount">Up to $1,250</div>
                    <div class="rebate-title">Backwater Valve</div>
                    <div class="rebate-desc">Flood protection incentive</div>
                </div>
                <div class="rebate-card">
                    <div class="rebate-amount">Up to $400</div>
                    <div class="rebate-title">Pipe Disconnection</div>
                    <div class="rebate-desc">Downspout severance rebate</div>
                </div>
            </div>
            <div class="rebate-note">
                <strong>Potential savings:</strong> Up to $3,400 in total rebates available
            </div>
        </div>

        <div class="financing-section">
            <h3>💳 Flexible Payment Options</h3>
            <div class="financing-cards">
                <div class="financing-card">
                    <h4>0% Interest</h4>
                    <p>12 months same as cash</p>
                    <div class="monthly-payment">
                        $<span id="monthly-0-interest">0</span>/month
                    </div>
                </div>
                <div class="financing-card">
                    <h4>Extended Terms</h4>
                    <p>Up to 60 months</p>
                    <div class="monthly-payment">
                        $<span id="monthly-extended">0</span>/month
                    </div>
                </div>
                <div class="financing-card featured">
                    <h4>Quick Approval</h4>
                    <p>Get approved in 2 minutes</p>
                    <div class="monthly-payment">
                        Apply online
                    </div>
                </div>
            </div>
        </div>

        <div class="next-steps">
            <h3>🚀 Ready to Get Started?</h3>
            <p>This estimate is based on industry averages and your specific requirements. Get a precise quote with our free, no-obligation inspection.</p>
            
            <div class="cta-section">
                <div class="primary-ctas">
                    <a href="tel:4375450067" class="cta-btn primary-cta">
                        📞 Call (437) 545-0067
                        <span>Speak with an expert now</span>
                    </a>
                    <button class="cta-btn secondary-cta" onclick="scheduleInspection()">
                        📋 Schedule Free Inspection
                        <span>Book your assessment</span>
                    </button>
                </div>
                
                <div class="urgency-banner">
                    <div class="urgency-content">
                        <strong>⚡ Limited Time:</strong> Free inspection + 10% off if booked this week
                        <span class="expires">Expires in 5 days</span>
                    </div>
                </div>
            </div>
        </div>

        <button class="calc-btn recalculate" onclick="resetSqftCalculator()">🔄 Recalculate</button>
    </div>
</div>

<div class="additional-resources">
    <h2>Related Resources</h2>
    <div class="resources-grid">
        <div class="resource-card">
            <h3>Cost Factors Guide</h3>
            <p>Learn what drives basement waterproofing costs in the Toronto area</p>
            <a href="/services/basement-waterproofing-cost/" class="resource-link">Read More →</a>
        </div>
        <div class="resource-card">
            <h3>Foundation Types</h3>
            <p>Understand how different foundations affect waterproofing needs</p>
            <a href="/guides/foundation-waterproofing-product-comparison/" class="resource-link">Learn More →</a>
        </div>
        <div class="resource-card">
            <h3>Financing Options</h3>
            <p>Explore payment plans and rebate opportunities</p>
            <a href="/waterproofing-rebates-2025/" class="resource-link">View Rebates →</a>
        </div>
    </div>
</div>

<style>
.sqft-calculator-container {
    max-width: 900px;
    margin: 2rem auto;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 8px 32px rgba(0,0,0,0.1);
    position: relative;
    overflow: hidden;
}

.sqft-calculator-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #1e40af, #3b82f6, #06b6d4);
}

.calculator-header {
    text-align: center;
    margin-bottom: 2.5rem;
}

.calculator-header h2 {
    color: #1e40af;
    margin-bottom: 0.5rem;
    font-size: 2rem;
    font-weight: 700;
}

.progress-bar {
    width: 100%;
    height: 8px;
    background: #e5e7eb;
    border-radius: 4px;
    margin: 1rem 0 0.5rem;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #1e40af, #3b82f6);
    border-radius: 4px;
    transition: width 0.3s ease;
    width: 16.67%;
}

.progress-text {
    font-size: 0.875rem;
    color: #6b7280;
    font-weight: 500;
}

.calc-step {
    display: none;
    animation: slideInRight 0.4s ease;
    min-height: 400px;
}

.calc-step.active {
    display: block;
}

@keyframes slideInRight {
    from { 
        opacity: 0; 
        transform: translateX(20px); 
    }
    to { 
        opacity: 1; 
        transform: translateX(0); 
    }
}

.calc-step h3 {
    font-size: 1.5rem;
    color: #1a1a1a;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.step-description {
    color: #6b7280;
    margin-bottom: 2rem;
    font-size: 1rem;
}

/* Location Grid */
.location-grid, .foundation-grid, .condition-grid, .service-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1rem;
}

.location-option, .foundation-option, .condition-option, .service-option {
    position: relative;
    display: block;
    padding: 1.5rem;
    background: white;
    border: 2px solid #e5e7eb;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    overflow: hidden;
}

.location-option::before, .foundation-option::before, .condition-option::before, .service-option::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #1e40af, #3b82f6);
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.location-option:hover, .foundation-option:hover, .condition-option:hover, .service-option:hover {
    border-color: #1e40af;
    box-shadow: 0 4px 16px rgba(30, 64, 175, 0.1);
    transform: translateY(-2px);
}

.location-option:hover::before, .foundation-option:hover::before, .condition-option:hover::before, .service-option:hover::before {
    transform: scaleX(1);
}

.location-option input, .foundation-option input, .condition-option input, .service-option input {
    display: none;
}

.location-option input:checked + .location-content,
.foundation-option input:checked + .foundation-content,
.condition-option input:checked + .condition-content,
.service-option input:checked + .service-content {
    color: #1e40af;
}

.location-option input:checked,
.foundation-option input:checked,
.condition-option input:checked,
.service-option input:checked {
    + * {
        background: linear-gradient(135deg, #eff6ff, #dbeafe);
        border-color: #1e40af;
    }
}

.location-content, .foundation-content, .condition-content, .service-content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.location-content strong, .foundation-content strong, .condition-content strong, .service-content strong {
    font-size: 1.125rem;
    color: #1a1a1a;
    font-weight: 600;
}

.price-indicator, .cost-impact, .cost-per-sqft {
    color: #059669;
    font-weight: 600;
    font-size: 0.875rem;
}

.service-features {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    margin-top: 0.5rem;
}

.service-features span {
    font-size: 0.8rem;
    color: #6b7280;
}

/* Size Input */
.size-input-tabs {
    display: flex;
    margin-bottom: 1.5rem;
    background: #f1f5f9;
    border-radius: 8px;
    padding: 4px;
}

.tab-btn {
    flex: 1;
    padding: 0.75rem;
    border: none;
    background: transparent;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s;
    font-weight: 500;
}

.tab-btn.active {
    background: white;
    color: #1e40af;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.size-method {
    display: none;
}

.size-method.active {
    display: block;
}

.dimension-inputs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 1rem;
}

.input-group {
    display: flex;
    flex-direction: column;
}

.input-group label {
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #4a5568;
}

.input-group input {
    padding: 0.75rem;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.2s;
}

.input-group input:focus {
    outline: none;
    border-color: #1e40af;
}

.sqft-display {
    background: linear-gradient(135deg, #eff6ff, #dbeafe);
    padding: 1.25rem;
    border-radius: 8px;
    text-align: center;
    font-size: 1.125rem;
}

.sqft-display strong {
    color: #1e40af;
    font-size: 1.75rem;
    font-weight: 700;
}

.size-reference {
    margin-top: 1.5rem;
    padding: 1rem;
    background: #f9fafb;
    border-radius: 8px;
}

.size-examples {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 0.75rem;
    margin-top: 0.75rem;
}

.size-example {
    display: flex;
    flex-direction: column;
    padding: 0.75rem;
    background: white;
    border-radius: 6px;
    font-size: 0.875rem;
}

.size-example strong {
    color: #1e40af;
    margin-bottom: 0.25rem;
}

/* Features Grid */
.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
}

.feature-option {
    display: block;
    padding: 1.25rem;
    background: white;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;
}

.feature-option:hover {
    border-color: #1e40af;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.feature-option input[type="checkbox"] {
    display: none;
}

.feature-option input[type="checkbox"]:checked + .feature-content {
    color: #1e40af;
}

.feature-content {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.feature-content strong {
    font-weight: 600;
    color: #1a1a1a;
}

.feature-cost {
    color: #059669;
    font-weight: 600;
    font-size: 0.875rem;
}

/* Navigation */
.calc-navigation {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    gap: 1rem;
}

.calc-btn {
    padding: 0.875rem 2rem;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.calc-btn.prev {
    background: #f1f5f9;
    color: #64748b;
}

.calc-btn.next, .calc-btn.calculate {
    background: linear-gradient(135deg, #1e40af, #1e3a8a);
    color: white;
}

.calc-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

/* Results Section */
.calculator-results {
    animation: fadeInUp 0.5s ease;
}

@keyframes fadeInUp {
    from { 
        opacity: 0; 
        transform: translateY(20px); 
    }
    to { 
        opacity: 1; 
        transform: translateY(0); 
    }
}

.results-header {
    text-align: center;
    margin-bottom: 2rem;
}

.results-header h2 {
    color: #1e40af;
    margin-bottom: 1rem;
}

.location-badge {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: linear-gradient(135deg, #eff6ff, #dbeafe);
    color: #1e40af;
    border-radius: 20px;
    font-weight: 600;
    font-size: 0.875rem;
}

.cost-summary {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
}

.cost-per-sqft, .total-cost {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}

.cost-per-sqft .label, .total-cost .label {
    display: block;
    color: #6b7280;
    margin-bottom: 1rem;
    font-weight: 500;
}

.sqft-range, .total-range {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.5rem;
}

.min-sqft, .max-sqft, .total-min, .total-max {
    font-size: 2rem;
    font-weight: 700;
    color: #1e40af;
}

.separator {
    color: #9ca3af;
    font-weight: 500;
}

.sqft-subtext, .area-info {
    color: #6b7280;
    font-size: 0.875rem;
}

/* Comparison Chart */
.comparison-chart {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    margin-bottom: 2rem;
    box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}

.comparison-bars {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.comparison-item {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.comparison-label {
    min-width: 120px;
    font-weight: 500;
    color: #374151;
}

.comparison-bar {
    flex: 1;
    height: 24px;
    background: #f3f4f6;
    border-radius: 12px;
    position: relative;
    overflow: hidden;
}

.comparison-fill {
    height: 100%;
    border-radius: 12px;
    position: relative;
}

.comparison-fill.toronto-avg {
    background: linear-gradient(90deg, #e5e7eb, #9ca3af);
    width: 70%;
}

.comparison-fill.your-estimate {
    background: linear-gradient(90deg, #1e40af, #3b82f6);
}

.comparison-fill.premium-range {
    background: linear-gradient(90deg, #dc2626, #ef4444);
    width: 100%;
}

.comparison-value {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.75rem;
    font-weight: 600;
    color: #374151;
}

/* Breakdown Cards */
.cost-breakdown-detailed {
    margin-bottom: 2rem;
}

.breakdown-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
}

.breakdown-card {
    background: white;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}

.breakdown-card h4 {
    color: #1e40af;
    margin-bottom: 1rem;
    font-size: 1.125rem;
}

.breakdown-details {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.breakdown-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
    border-bottom: 1px solid #f3f4f6;
}

.breakdown-item:last-child {
    border-bottom: none;
}

/* Rebate Cards */
.rebate-opportunities {
    background: linear-gradient(135deg, #d1fae5, #a7f3d0);
    padding: 2rem;
    border-radius: 12px;
    margin-bottom: 2rem;
}

.rebate-opportunities h3 {
    color: #065f46;
    margin-bottom: 1.5rem;
    text-align: center;
}

.rebate-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-bottom: 1rem;
}

.rebate-card {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    text-align: center;
}

.rebate-amount {
    font-size: 1.5rem;
    font-weight: 700;
    color: #059669;
    margin-bottom: 0.5rem;
}

.rebate-title {
    font-weight: 600;
    color: #065f46;
    margin-bottom: 0.25rem;
}

.rebate-desc {
    font-size: 0.875rem;
    color: #6b7280;
}

.rebate-note {
    text-align: center;
    color: #065f46;
    font-weight: 500;
}

/* Financing Section */
.financing-section {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    margin-bottom: 2rem;
    box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}

.financing-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
}

.financing-card {
    padding: 1.5rem;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    text-align: center;
    transition: all 0.2s;
}

.financing-card.featured {
    border-color: #1e40af;
    background: linear-gradient(135deg, #eff6ff, #dbeafe);
}

.financing-card:hover {
    border-color: #1e40af;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.financing-card h4 {
    color: #1e40af;
    margin-bottom: 0.5rem;
}

.monthly-payment {
    font-size: 1.25rem;
    font-weight: 700;
    color: #059669;
    margin-top: 0.75rem;
}

/* Next Steps & CTAs */
.next-steps {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    text-align: center;
    margin-bottom: 2rem;
    box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}

.primary-ctas {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin: 2rem 0;
    flex-wrap: wrap;
}

.cta-btn {
    padding: 1.25rem 2rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    transition: all 0.3s;
    border: none;
    cursor: pointer;
    min-width: 200px;
}

.primary-cta {
    background: linear-gradient(135deg, #1e40af, #1e3a8a);
    color: white;
}

.secondary-cta {
    background: #f1f5f9;
    color: #1e40af;
    border: 2px solid #1e40af;
}

.cta-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}

.cta-btn span {
    font-size: 0.875rem;
    opacity: 0.9;
}

.urgency-banner {
    background: linear-gradient(135deg, #fef3c7, #fde68a);
    padding: 1rem;
    border-radius: 8px;
    margin-top: 1.5rem;
}

.urgency-content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
}

.urgency-content strong {
    color: #92400e;
}

.expires {
    color: #b45309;
    font-size: 0.875rem;
}

.recalculate {
    display: block;
    margin: 2rem auto 0;
    background: #6b7280;
    color: white;
}

/* Additional Resources */
.additional-resources {
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 2px solid #e5e7eb;
}

.resources-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
}

.resource-card {
    background: white;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.1);
    transition: all 0.2s;
}

.resource-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}

.resource-card h3 {
    color: #1e40af;
    margin-bottom: 0.75rem;
}

.resource-link {
    color: #1e40af;
    text-decoration: none;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    margin-top: 1rem;
    transition: all 0.2s;
}

.resource-link:hover {
    gap: 0.5rem;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
    .sqft-calculator-container {
        padding: 1rem;
        margin: 1rem;
    }
    
    .location-grid, .foundation-grid, .condition-grid, .service-grid, .features-grid {
        grid-template-columns: 1fr;
    }
    
    .cost-summary {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
    
    .dimension-inputs {
        grid-template-columns: 1fr;
    }
    
    .comparison-item {
        flex-direction: column;
        align-items: stretch;
        gap: 0.5rem;
    }
    
    .comparison-label {
        min-width: auto;
    }
    
    .primary-ctas {
        flex-direction: column;
        align-items: center;
    }
    
    .urgency-content {
        flex-direction: column;
        text-align: center;
        gap: 0.5rem;
    }
}
</style>

<script>
let currentStep = 1;
const totalSteps = 6;
let currentSqft = 750;

// Initialize calculator
document.addEventListener('DOMContentLoaded', function() {
    updateProgress();
    updateSquareFootage();
    
    // Add event listeners for dimension inputs
    document.getElementById('length').addEventListener('input', updateSquareFootage);
    document.getElementById('width').addEventListener('input', updateSquareFootage);
    document.getElementById('manual-sqft').addEventListener('input', function() {
        currentSqft = parseFloat(this.value) || 750;
    });
});

function updateProgress() {
    const progressPercent = (currentStep / totalSteps) * 100;
    document.getElementById('progress-bar').style.width = progressPercent + '%';
    document.getElementById('progress-text').textContent = `Step ${currentStep} of ${totalSteps}`;
}

function updateSquareFootage() {
    const length = parseFloat(document.getElementById('length').value) || 0;
    const width = parseFloat(document.getElementById('width').value) || 0;
    currentSqft = length * width;
    document.getElementById('calculated-sqft').textContent = currentSqft;
}

function switchSizeMethod(method) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Show/hide input methods
    document.querySelectorAll('.size-method').forEach(method => method.classList.remove('active'));
    document.getElementById(method + '-input').classList.add('active');
    
    // Update current sqft based on active method
    if (method === 'sqft') {
        currentSqft = parseFloat(document.getElementById('manual-sqft').value) || 750;
    } else {
        updateSquareFootage();
    }
}

function showStep(step) {
    document.querySelectorAll('.calc-step').forEach(s => s.classList.remove('active'));
    document.querySelector(`[data-step="${step}"]`).classList.add('active');
    
    // Update navigation buttons
    document.querySelector('.prev').style.display = step === 1 ? 'none' : 'block';
    document.querySelector('.next').style.display = step === totalSteps ? 'none' : 'block';
    document.querySelector('.calculate').style.display = step === totalSteps ? 'block' : 'none';
    
    updateProgress();
}

function nextStep() {
    if (currentStep < totalSteps) {
        currentStep++;
        showStep(currentStep);
    }
}

function previousStep() {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
    }
}

function calculateSqftCost() {
    // Get all form inputs
    const location = document.querySelector('input[name="location"]:checked');
    const foundation = document.querySelector('input[name="foundation"]:checked');
    const condition = document.querySelector('input[name="condition"]:checked');
    const serviceType = document.querySelector('input[name="service-type"]:checked');
    const features = Array.from(document.querySelectorAll('input[name="features"]:checked'));
    
    // Get base cost per sqft from service type
    const baseCostPerSqft = parseFloat(serviceType.dataset.baseCost);
    
    // Apply multipliers
    const locationMultiplier = parseFloat(location.dataset.multiplier);
    const foundationMultiplier = parseFloat(foundation.dataset.multiplier);
    const conditionMultiplier = parseFloat(condition.dataset.multiplier);
    
    // Calculate base cost range (±20% variation)
    let minCostPerSqft = baseCostPerSqft * 0.8;
    let maxCostPerSqft = baseCostPerSqft * 1.2;
    
    // Apply multipliers
    minCostPerSqft *= locationMultiplier * foundationMultiplier * conditionMultiplier;
    maxCostPerSqft *= locationMultiplier * foundationMultiplier * conditionMultiplier;
    
    // Add features cost
    let featuresCostPerSqft = 0;
    features.forEach(feature => {
        featuresCostPerSqft += parseFloat(feature.dataset.costPerSqft);
    });
    
    minCostPerSqft += featuresCostPerSqft * 0.8;
    maxCostPerSqft += featuresCostPerSqft * 1.2;
    
    // Calculate total costs
    const totalMinCost = Math.round(minCostPerSqft * currentSqft);
    const totalMaxCost = Math.round(maxCostPerSqft * currentSqft);
    
    // Display results
    document.getElementById('min-sqft').textContent = Math.round(minCostPerSqft);
    document.getElementById('max-sqft').textContent = Math.round(maxCostPerSqft);
    document.getElementById('total-min').textContent = totalMinCost.toLocaleString();
    document.getElementById('total-max').textContent = totalMaxCost.toLocaleString();
    document.getElementById('project-sqft').textContent = currentSqft;
    
    // Update location badge
    const locationText = location.parentElement.querySelector('strong').textContent;
    document.getElementById('location-badge').textContent = locationText + ' Pricing';
    
    // Update comparison chart
    const avgCostPerSqft = (minCostPerSqft + maxCostPerSqft) / 2;
    const comparisonWidth = Math.min((avgCostPerSqft / 50) * 100, 100);
    document.getElementById('your-comparison').style.width = comparisonWidth + '%';
    document.getElementById('your-range').textContent = `$${Math.round(minCostPerSqft)}-${Math.round(maxCostPerSqft)}/sq ft`;
    
    // Build detailed breakdown
    buildCostBreakdown(baseCostPerSqft, locationMultiplier, foundationMultiplier, conditionMultiplier, features, serviceType, location, foundation, condition);
    
    // Calculate financing
    document.getElementById('monthly-0-interest').textContent = Math.round(totalMinCost / 12).toLocaleString();
    document.getElementById('monthly-extended').textContent = Math.round(totalMinCost / 60).toLocaleString();
    
    // Show results
    document.getElementById('sqft-calc-form').style.display = 'none';
    document.getElementById('sqft-results').style.display = 'block';
    
    // Scroll to results
    document.getElementById('sqft-results').scrollIntoView({ behavior: 'smooth' });
}

function buildCostBreakdown(baseCost, locationMult, foundationMult, conditionMult, features, serviceType, location, foundation, condition) {
    // Base breakdown
    const baseMin = Math.round(baseCost * 0.8 * currentSqft);
    const baseMax = Math.round(baseCost * 1.2 * currentSqft);
    const serviceTypeName = serviceType.parentElement.querySelector('strong').textContent;
    
    document.getElementById('base-breakdown').innerHTML = `
        <div class="breakdown-item">
            <span>${serviceTypeName}</span>
            <span>$${baseMin.toLocaleString()} - $${baseMax.toLocaleString()}</span>
        </div>
    `;
    
    // Multipliers breakdown
    let multipliersHtml = '';
    if (locationMult !== 1.0) {
        const locationName = location.parentElement.querySelector('strong').textContent;
        const locationPercent = Math.round((locationMult - 1) * 100);
        multipliersHtml += `
            <div class="breakdown-item">
                <span>${locationName} Location</span>
                <span>+${locationPercent}%</span>
            </div>
        `;
    }
    
    if (foundationMult !== 1.0) {
        const foundationName = foundation.parentElement.querySelector('strong').textContent;
        const foundationPercent = Math.round((foundationMult - 1) * 100);
        multipliersHtml += `
            <div class="breakdown-item">
                <span>${foundationName}</span>
                <span>+${foundationPercent}%</span>
            </div>
        `;
    }
    
    if (conditionMult !== 1.0) {
        const conditionName = condition.parentElement.querySelector('strong').textContent;
        const conditionPercent = Math.round((conditionMult - 1) * 100);
        multipliersHtml += `
            <div class="breakdown-item">
                <span>${conditionName}</span>
                <span>+${conditionPercent}%</span>
            </div>
        `;
    }
    
    if (multipliersHtml) {
        document.getElementById('multipliers-breakdown').innerHTML = multipliersHtml;
        document.getElementById('multipliers-card').style.display = 'block';
    }
    
    // Features breakdown
    if (features.length > 0) {
        let featuresHtml = '';
        features.forEach(feature => {
            const featureName = feature.parentElement.querySelector('strong').textContent;
            const featureCostPerSqft = parseFloat(feature.dataset.costPerSqft);
            const featureMin = Math.round(featureCostPerSqft * 0.8 * currentSqft);
            const featureMax = Math.round(featureCostPerSqft * 1.2 * currentSqft);
            
            featuresHtml += `
                <div class="breakdown-item">
                    <span>${featureName}</span>
                    <span>$${featureMin.toLocaleString()} - $${featureMax.toLocaleString()}</span>
                </div>
            `;
        });
        
        document.getElementById('features-breakdown').innerHTML = featuresHtml;
        document.getElementById('features-card').style.display = 'block';
    }
}

function resetSqftCalculator() {
    currentStep = 1;
    showStep(1);
    document.getElementById('sqft-calc-form').style.display = 'block';
    document.getElementById('sqft-results').style.display = 'none';
    
    // Reset multiplier cards
    document.getElementById('multipliers-card').style.display = 'none';
    document.getElementById('features-card').style.display = 'none';
    
    // Scroll back to top
    document.getElementById('sqft-calculator').scrollIntoView({ behavior: 'smooth' });
}

function scheduleInspection() {
    // This would integrate with your booking system
    window.location.href = '/contact/#inspection-form';
}

// Initialize
showStep(1);

// Add some dynamic interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to radio buttons
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', function() {
            // Add a subtle animation when selection changes
            this.closest('label').style.transform = 'scale(1.02)';
            setTimeout(() => {
                this.closest('label').style.transform = '';
            }, 150);
        });
    });
    
    // Add real-time validation
    document.querySelectorAll('input[type="number"]').forEach(input => {
        input.addEventListener('input', function() {
            if (this.value && (parseFloat(this.value) < parseFloat(this.min) || parseFloat(this.value) > parseFloat(this.max))) {
                this.style.borderColor = '#dc2626';
            } else {
                this.style.borderColor = '#e5e7eb';
            }
        });
    });
});
</script>