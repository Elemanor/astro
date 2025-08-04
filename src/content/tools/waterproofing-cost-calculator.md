---
title: "FREE Basement Waterproofing Cost Calculator | Instant Toronto Estimates"
description: "Get INSTANT waterproofing cost estimates! Free calculator gives accurate Toronto pricing in 30 seconds. Interior, exterior & combo quotes. Try now!"
date: 2025-01-28
draft: false
type: "tools"
---

# Advanced Basement Waterproofing Cost Calculator

The most comprehensive waterproofing cost calculator in Toronto. Get instant estimates with material quantities, labor time, seasonal pricing, ROI analysis, financing options, and available rebates. Trusted by 10,000+ homeowners.

**Related Services**: Learn more about our [basement waterproofing solutions](/basement-waterproofing/), [interior waterproofing systems](/services/interior-waterproofing/), or [emergency waterproofing services](/services/emergency-waterproofing/). For detailed pricing information, visit our [pricing page](/pricing/).

<div id="waterproofing-calculator" class="calculator-container">
    <div class="calculator-header">
        <h2>Calculate Your Waterproofing Cost</h2>
        <p>Answer a few questions to get your personalized estimate</p>
    </div>

    <form id="calc-form" class="calculator-form">
        <!-- Step 1: Basement Size -->
        <div class="calc-step active" data-step="1">
            <h3>What's your basement size?</h3>
            <div class="input-group">
                <label for="basement-length">Length (feet)</label>
                <input type="number" id="basement-length" min="10" max="100" value="40" required>
            </div>
            <div class="input-group">
                <label for="basement-width">Width (feet)</label>
                <input type="number" id="basement-width" min="10" max="100" value="30" required>
            </div>
            <div class="perimeter-display">
                <span>Perimeter: </span>
                <strong id="perimeter">140</strong> linear feet
            </div>
        </div>

        <!-- Step 2: Waterproofing Type -->
        <div class="calc-step" data-step="2">
            <h3>What type of waterproofing do you need?</h3>
            <div class="radio-group">
                <label class="radio-option">
                    <input type="radio" name="waterproofing-type" value="interior" checked>
                    <div class="radio-content">
                        <strong>Interior Waterproofing</strong>
                        <span>Less invasive, great for finished basements</span>
                        <span class="price-range">$70-$100 per linear foot</span>
                    </div>
                </label>
                <label class="radio-option">
                    <input type="radio" name="waterproofing-type" value="exterior">
                    <div class="radio-content">
                        <strong>Exterior Waterproofing</strong>
                        <span>Most comprehensive protection</span>
                        <span class="price-range">$100-$350 per linear foot</span>
                    </div>
                </label>
                <label class="radio-option">
                    <input type="radio" name="waterproofing-type" value="both">
                    <div class="radio-content">
                        <strong>Both Interior & Exterior</strong>
                        <span>Maximum protection for severe issues</span>
                        <span class="price-range">$150-$400 per linear foot</span>
                    </div>
                </label>
            </div>
        </div>

        <!-- Step 3: Additional Services -->
        <div class="calc-step" data-step="3">
            <h3>Do you need any additional services?</h3>
            <div class="checkbox-group">
                <label class="checkbox-option">
                    <input type="checkbox" name="additions" value="sump-pump" data-cost="2000">
                    <div class="checkbox-content">
                        <strong>Sump Pump Installation</strong>
                        <span>Essential for water management</span>
                        <span class="price-tag">+$1,500 - $3,500</span>
                    </div>
                </label>
                <label class="checkbox-option">
                    <input type="checkbox" name="additions" value="battery-backup" data-cost="1000">
                    <div class="checkbox-content">
                        <strong>Battery Backup System</strong>
                        <span>Protection during power outages</span>
                        <span class="price-tag">+$800 - $1,500</span>
                    </div>
                </label>
                <label class="checkbox-option">
                    <input type="checkbox" name="additions" value="crack-repair" data-cost="1000">
                    <div class="checkbox-content">
                        <strong>Foundation Crack Repair</strong>
                        <span>Fix existing cracks</span>
                        <span class="price-tag">+$500 - $2,000</span>
                    </div>
                </label>
                <label class="checkbox-option">
                    <input type="checkbox" name="additions" value="window-wells" data-cost="1500">
                    <div class="checkbox-content">
                        <strong>Window Well Installation</strong>
                        <span>Protect basement windows</span>
                        <span class="price-tag">+$1,000 - $2,000 per well</span>
                    </div>
                </label>
            </div>
        </div>

        <!-- Step 4: Current Issues -->
        <div class="calc-step" data-step="4">
            <h3>What issues are you experiencing?</h3>
            <div class="checkbox-group">
                <label class="checkbox-option">
                    <input type="checkbox" name="issues" value="active-leak" data-urgency="high">
                    <span>Active water leaks</span>
                </label>
                <label class="checkbox-option">
                    <input type="checkbox" name="issues" value="dampness" data-urgency="medium">
                    <span>Dampness or humidity</span>
                </label>
                <label class="checkbox-option">
                    <input type="checkbox" name="issues" value="mold" data-urgency="high">
                    <span>Mold or mildew</span>
                </label>
                <label class="checkbox-option">
                    <input type="checkbox" name="issues" value="cracks" data-urgency="medium">
                    <span>Visible cracks</span>
                </label>
                <label class="checkbox-option">
                    <input type="checkbox" name="issues" value="preventive" data-urgency="low">
                    <span>Preventive (no current issues)</span>
                </label>
            </div>
        </div>

        <!-- Step 5: Project Timeline -->
        <div class="calc-step" data-step="5">
            <h3>When do you need the work completed?</h3>
            <div class="radio-group">
                <label class="radio-option">
                    <input type="radio" name="timeline" value="emergency" data-multiplier="1.5">
                    <div class="radio-content">
                        <strong>Emergency (Within 48 hours)</strong>
                        <span>Rush service available 24/7</span>
                        <span class="price-range">+50% emergency surcharge</span>
                    </div>
                </label>
                <label class="radio-option">
                    <input type="radio" name="timeline" value="urgent" data-multiplier="1.25">
                    <div class="radio-content">
                        <strong>Urgent (Within 1 week)</strong>
                        <span>Priority scheduling</span>
                        <span class="price-range">+25% rush surcharge</span>
                    </div>
                </label>
                <label class="radio-option">
                    <input type="radio" name="timeline" value="spring" data-multiplier="1.15" checked>
                    <div class="radio-content">
                        <strong>Spring/Summer (Peak Season)</strong>
                        <span>Standard scheduling, best weather</span>
                        <span class="price-range">+15% seasonal premium</span>
                    </div>
                </label>
                <label class="radio-option">
                    <input type="radio" name="timeline" value="fall" data-multiplier="1.0">
                    <div class="radio-content">
                        <strong>Fall (Optimal)</strong>
                        <span>Best pricing, good weather</span>
                        <span class="price-range">Standard rates</span>
                    </div>
                </label>
                <label class="radio-option">
                    <input type="radio" name="timeline" value="winter" data-multiplier="0.85">
                    <div class="radio-content">
                        <strong>Winter (Best Value)</strong>
                        <span>Interior work only, best prices</span>
                        <span class="price-range">-15% winter discount</span>
                    </div>
                </label>
            </div>
        </div>

        <!-- Step 6: Location -->
        <div class="calc-step" data-step="6">
            <h3>What's your location in the GTA?</h3>
            <div class="radio-group">
                <label class="radio-option">
                    <input type="radio" name="location" value="toronto" data-rebate="3400" checked>
                    <div class="radio-content">
                        <strong>Toronto</strong>
                        <span>Maximum rebates up to $3,400</span>
                    </div>
                </label>
                <label class="radio-option">
                    <input type="radio" name="location" value="mississauga" data-rebate="2800">
                    <div class="radio-content">
                        <strong>Mississauga</strong>
                        <span>Rebates up to $2,800</span>
                    </div>
                </label>
                <label class="radio-option">
                    <input type="radio" name="location" value="brampton" data-rebate="2500">
                    <div class="radio-content">
                        <strong>Brampton</strong>
                        <span>Rebates up to $2,500</span>
                    </div>
                </label>
                <label class="radio-option">
                    <input type="radio" name="location" value="markham" data-rebate="2200">
                    <div class="radio-content">
                        <strong>Markham/Richmond Hill</strong>
                        <span>Rebates up to $2,200</span>
                    </div>
                </label>
                <label class="radio-option">
                    <input type="radio" name="location" value="other" data-rebate="1500">
                    <div class="radio-content">
                        <strong>Other GTA</strong>
                        <span>Provincial rebates up to $1,500</span>
                    </div>
                </label>
            </div>
        </div>

        <!-- Navigation -->
        <div class="calc-navigation">
            <button type="button" class="calc-btn prev" onclick="previousStep()">Previous</button>
            <button type="button" class="calc-btn next" onclick="nextStep()">Next</button>
            <button type="button" class="calc-btn calculate" onclick="calculateCost()" style="display:none;">Calculate Cost</button>
        </div>
    </form>

    <!-- Results Section -->
    <div id="calc-results" class="calculator-results" style="display:none;">
        <h2>Your Estimated Cost</h2>
        
        <div class="cost-breakdown">
            <div class="cost-range">
                <span class="label">Estimated Total Cost:</span>
                <div class="range-values">
                    <span class="min-cost">$<span id="min-cost">0</span></span>
                    <span class="separator">to</span>
                    <span class="max-cost">$<span id="max-cost">0</span></span>
                </div>
                <div class="after-rebates">
                    <span class="label-small">After Rebates:</span>
                    <div class="net-cost">$<span id="net-min-cost">0</span> - $<span id="net-max-cost">0</span></div>
                </div>
            </div>

            <!-- Results Navigation -->
            <div class="results-nav">
                <button class="nav-btn active" onclick="showResultsTab('breakdown')">Cost Breakdown</button>
                <button class="nav-btn" onclick="showResultsTab('materials')">Materials & Labor</button>
                <button class="nav-btn" onclick="showResultsTab('comparison')">Solution Comparison</button>
                <button class="nav-btn" onclick="showResultsTab('roi')">ROI Analysis</button>
                <button class="nav-btn" onclick="showResultsTab('financing')">Financing</button>
            </div>

            <!-- Cost Breakdown Tab -->
            <div id="breakdown-tab" class="results-tab active">
                <div class="cost-details">
                    <h3>Detailed Cost Breakdown:</h3>
                    <ul id="breakdown-list"></ul>
                </div>

                <div class="rebate-info">
                    <h3>💰 <span id="rebate-title">Available Rebates</span></h3>
                    <div id="rebate-details"></div>
                </div>
            </div>

            <!-- Materials & Labor Tab -->
            <div id="materials-tab" class="results-tab">
                <div class="materials-section">
                    <h3>📋 Materials Required</h3>
                    <div id="materials-list"></div>
                </div>
                
                <div class="labor-section">
                    <h3>👷 Labor & Timeline</h3>
                    <div id="labor-details"></div>
                </div>
            </div>

            <!-- Solution Comparison Tab -->
            <div id="comparison-tab" class="results-tab">
                <h3>🔍 Solution Comparison</h3>
                <div class="comparison-table" id="solution-comparison"></div>
            </div>

            <!-- ROI Analysis Tab -->
            <div id="roi-tab" class="results-tab">
                <h3>📈 Return on Investment Analysis</h3>
                <div class="roi-metrics" id="roi-analysis"></div>
            </div>

            <!-- Financing Tab -->
            <div id="financing-tab" class="results-tab">
                <div class="financing-options">
                    <h3>💳 Financing Options</h3>
                    <div class="payment-cards">
                        <div class="payment-card">
                            <h4>0% Interest</h4>
                            <p>12 months same as cash</p>
                            <span class="monthly">$<span id="monthly-0">0</span>/month</span>
                            <span class="total">Total: $<span id="total-0">0</span></span>
                        </div>
                        <div class="payment-card">
                            <h4>Low Rate 24 months</h4>
                            <p>6.9% APR</p>
                            <span class="monthly">$<span id="monthly-24">0</span>/month</span>
                            <span class="total">Total: $<span id="total-24">0</span></span>
                        </div>
                        <div class="payment-card">
                            <h4>Extended 48 months</h4>
                            <p>8.9% APR</p>
                            <span class="monthly">$<span id="monthly-48">0</span>/month</span>
                            <span class="total">Total: $<span id="total-48">0</span></span>
                        </div>
                        <div class="payment-card">
                            <h4>Maximum 60 months</h4>
                            <p>9.9% APR</p>
                            <span class="monthly">$<span id="monthly-60">0</span>/month</span>
                            <span class="total">Total: $<span id="total-60">0</span></span>
                        </div>
                    </div>
                    
                    <div class="financing-calculator">
                        <h4>Custom Payment Calculator</h4>
                        <div class="custom-calc">
                            <label>Loan Amount: $<span id="loan-amount">0</span></label>
                            <label>Term (months): <input type="range" id="custom-term" min="12" max="60" value="24" oninput="updateCustomPayment()"></label>
                            <label>Interest Rate: <input type="range" id="custom-rate" min="0" max="15" step="0.1" value="6.9" oninput="updateCustomPayment()">%</label>
                            <div class="custom-result">
                                Monthly Payment: $<span id="custom-monthly">0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="cta-section">
            <h3>Get Your Exact Quote</h3>
            <p>This is an estimate based on average costs. Every home is unique - get your personalized quote with our free inspection.</p>
            <div class="cta-buttons">
                <a href="tel:4375450067" class="cta-btn primary">
                    📞 Call (437) 545-0067
                </a>
                <button class="cta-btn secondary" onclick="scheduleInspection()">
                    📋 Schedule Free Inspection
                </button>
            </div>
        </div>

        <button class="calc-btn recalculate" onclick="resetCalculator()">Recalculate</button>
    </div>
</div>

<style>
.calculator-container {
    max-width: 800px;
    margin: 2rem auto;
    background: #f9fafb;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

.calculator-header {
    text-align: center;
    margin-bottom: 2rem;
}

.calculator-header h2 {
    color: #1e40af;
    margin-bottom: 0.5rem;
}

.calc-step {
    display: none;
    animation: fadeIn 0.3s ease;
}

.calc-step.active {
    display: block;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

.calc-step h3 {
    margin-bottom: 1.5rem;
    color: #1a1a1a;
}

.input-group {
    margin-bottom: 1rem;
}

.input-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #4a5568;
}

.input-group input {
    width: 100%;
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

.perimeter-display {
    background: #e0e7ff;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    margin-top: 1rem;
    font-size: 1.125rem;
}

.perimeter-display strong {
    color: #1e40af;
    font-size: 1.5rem;
}

.radio-group, .checkbox-group {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.radio-option, .checkbox-option {
    display: block;
    padding: 1.25rem;
    background: white;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;
}

.radio-option:hover, .checkbox-option:hover {
    border-color: #1e40af;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.radio-option input[type="radio"],
.checkbox-option input[type="checkbox"] {
    display: none;
}

.radio-option input[type="radio"]:checked + .radio-content,
.checkbox-option input[type="checkbox"]:checked + .checkbox-content,
.checkbox-option input[type="checkbox"]:checked ~ span {
    color: #1e40af;
}

.radio-option input[type="radio"]:checked ~ *,
.checkbox-option input[type="checkbox"]:checked ~ * {
    font-weight: 600;
}

.radio-content, .checkbox-content {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.radio-content strong, .checkbox-content strong {
    font-size: 1.125rem;
    color: #1a1a1a;
}

.radio-content span, .checkbox-content span {
    font-size: 0.875rem;
    color: #6b7280;
}

.price-range, .price-tag {
    color: #059669 !important;
    font-weight: 600 !important;
}

.calc-navigation {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    gap: 1rem;
}

.calc-btn {
    padding: 0.75rem 2rem;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
}

.calc-btn.prev {
    background: #e5e7eb;
    color: #4a5568;
}

.calc-btn.next, .calc-btn.calculate {
    background: #1e40af;
    color: white;
}

.calc-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.calculator-results {
    animation: slideIn 0.5s ease;
}

@keyframes slideIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.cost-range {
    background: linear-gradient(135deg, #1e40af, #1e3a8a);
    color: white;
    padding: 2rem;
    border-radius: 12px;
    text-align: center;
    margin-bottom: 2rem;
}

.cost-range .label {
    display: block;
    font-size: 1.125rem;
    margin-bottom: 1rem;
    opacity: 0.9;
}

.range-values {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.min-cost, .max-cost {
    font-size: 2.5rem;
    font-weight: 700;
}

.separator {
    font-size: 1.25rem;
    opacity: 0.7;
}

.cost-details {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    margin-bottom: 1.5rem;
}

.cost-details h3 {
    margin-bottom: 1rem;
    color: #1a1a1a;
}

#breakdown-list {
    list-style: none;
    padding: 0;
}

#breakdown-list li {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    border-bottom: 1px solid #f3f4f6;
}

.rebate-info {
    background: #d1fae5;
    padding: 1.5rem;
    border-radius: 8px;
    margin-bottom: 1.5rem;
}

.rebate-info h3 {
    color: #065f46;
    margin-bottom: 0.5rem;
}

.rebate-info ul {
    margin: 0.5rem 0 0 1.5rem;
}

.financing-options {
    margin-bottom: 2rem;
}

.payment-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
}

.payment-card {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    text-align: center;
    border: 2px solid #e5e7eb;
}

.payment-card h4 {
    color: #1e40af;
    margin-bottom: 0.5rem;
}

.payment-card .monthly {
    display: block;
    font-size: 1.25rem;
    font-weight: 700;
    color: #059669;
    margin-top: 0.5rem;
}

.cta-section {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
    margin-bottom: 1.5rem;
}

.cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 1.5rem;
    flex-wrap: wrap;
}

.cta-btn {
    padding: 1rem 2rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.2s;
    border: none;
    cursor: pointer;
}

.cta-btn.primary {
    background: #1e40af;
    color: white;
}

.cta-btn.secondary {
    background: #f3f4f6;
    color: #1e40af;
    border: 2px solid #1e40af;
}

.cta-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.recalculate {
    display: block;
    margin: 0 auto;
    background: #6b7280;
    color: white;
}

/* Additional styles for enhanced calculator */
.after-rebates {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(255,255,255,0.3);
}

.label-small {
    font-size: 0.9rem;
    opacity: 0.8;
}

.net-cost {
    font-size: 1.5rem;
    font-weight: 600;
    color: #10b981;
}

.results-nav {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;
    overflow-x: auto;
    padding-bottom: 0.5rem;
}

.nav-btn {
    padding: 0.75rem 1rem;
    border: 2px solid #e5e7eb;
    background: white;
    border-radius: 8px;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.2s;
    font-weight: 500;
}

.nav-btn.active {
    background: #1e40af;
    color: white;
    border-color: #1e40af;
}

.nav-btn:hover {
    border-color: #1e40af;
}

.results-tab {
    display: none;
}

.results-tab.active {
    display: block;
}

.materials-table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
}

.materials-table th,
.materials-table td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid #e5e7eb;
}

.materials-table th {
    background: #f9fafb;
    font-weight: 600;
}

.materials-total {
    text-align: right;
    margin-top: 1rem;
    padding: 1rem;
    background: #f0f9ff;
    border-radius: 8px;
}

.labor-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.stat-item {
    background: white;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    border: 2px solid #e5e7eb;
}

.stat-label {
    display: block;
    font-size: 0.875rem;
    color: #6b7280;
    margin-bottom: 0.5rem;
}

.stat-value {
    font-size: 1.25rem;
    font-weight: 700;
    color: #1e40af;
}

.labor-cost {
    text-align: center;
    padding: 1rem;
    background: #f0f9ff;
    border-radius: 8px;
}

.comparison-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
}

.solution-card {
    background: white;
    border: 2px solid #e5e7eb;
    border-radius: 12px;
    padding: 1.5rem;
}

.solution-card h4 {
    color: #1e40af;
    margin-bottom: 1rem;
    text-align: center;
}

.solution-cost {
    text-align: center;
    font-size: 1.25rem;
    font-weight: 700;
    color: #059669;
    margin-bottom: 1.5rem;
    padding: 0.75rem;
    background: #ecfccb;
    border-radius: 8px;
}

.pros-cons {
    display: grid;
    gap: 1rem;
}

.pros h5, .cons h5 {
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
}

.pros ul, .cons ul {
    margin: 0;
    padding-left: 1.25rem;
    font-size: 0.875rem;
}

.pros li {
    margin-bottom: 0.25rem;
    color: #059669;
}

.cons li {
    margin-bottom: 0.25rem;
    color: #dc2626;
}

.roi-metrics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.roi-metric {
    background: white;
    padding: 1.5rem;
    border-radius: 12px;
    text-align: center;
    border: 2px solid #e5e7eb;
}

.roi-metric h4 {
    color: #1e40af;
    margin-bottom: 1rem;
    font-size: 1rem;
}

.metric-value {
    font-size: 2rem;
    font-weight: 700;
    color: #059669;
    margin-bottom: 0.5rem;
}

.savings-breakdown {
    font-size: 0.875rem;
    color: #6b7280;
}

.savings-breakdown div {
    margin-bottom: 0.25rem;
}

.roi-details {
    background: #f0f9ff;
    padding: 1.5rem;
    border-radius: 8px;
}

.roi-details h4 {
    color: #1e40af;
    margin-bottom: 1rem;
}

.roi-details ul {
    margin: 0;
    padding-left: 1.5rem;
}

.roi-details li {
    margin-bottom: 0.75rem;
    line-height: 1.5;
}

.payment-card .total {
    display: block;
    font-size: 0.875rem;
    color: #6b7280;
    margin-top: 0.25rem;
}

.financing-calculator {
    background: #f9fafb;
    padding: 1.5rem;
    border-radius: 8px;
    margin-top: 2rem;
}

.custom-calc {
    display: grid;
    gap: 1rem;
}

.custom-calc label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
}

.custom-calc input[type="range"] {
    width: 200px;
    margin-left: 1rem;
}

.custom-result {
    text-align: center;
    font-size: 1.25rem;
    font-weight: 700;
    color: #1e40af;
    padding: 1rem;
    background: white;
    border-radius: 8px;
    margin-top: 1rem;
}

@media (max-width: 768px) {
    .calculator-container {
        padding: 1rem;
    }
    
    .range-values {
        flex-direction: column;
        gap: 0.5rem;
    }
    
    .min-cost, .max-cost {
        font-size: 2rem;
    }
    
    .results-nav {
        flex-wrap: wrap;
    }
    
    .nav-btn {
        font-size: 0.875rem;
        padding: 0.5rem 0.75rem;
    }
    
    .comparison-grid {
        grid-template-columns: 1fr;
    }
    
    .roi-metrics-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .metric-value {
        font-size: 1.5rem;
    }
    
    .custom-calc label {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }
    
    .custom-calc input[type="range"] {
        width: 100%;
        margin-left: 0;
    }
}
</style>

<script>
let currentStep = 1;
const totalSteps = 6;

// Material pricing data (Toronto market rates)
const materialPricing = {
    'interior': {
        fabric: 3.50, // per sq ft
        membrane: 4.25, // per sq ft
        sealant: 12.50, // per linear ft
        pipe: 8.75, // per linear ft (4" weeping tile)
        gravel: 45.00, // per cubic yard
        concrete: 120.00 // per cubic yard
    },
    'exterior': {
        excavation: 25.00, // per linear ft
        membrane: 6.50, // per sq ft
        fabric: 4.25, // per sq ft
        pipe: 12.50, // per linear ft (6" weeping tile)
        gravel: 45.00, // per cubic yard
        concrete: 120.00, // per cubic yard
    }
};

// Labor rates and crew information
const laborRates = {
    interior: {
        hourlyRate: 65.00,
        crewSize: 2,
        hoursPerLinearFoot: 0.75
    },
    exterior: {
        hourlyRate: 75.00,
        crewSize: 3,
        hoursPerLinearFoot: 2.5
    }
};

// Update perimeter when dimensions change
document.getElementById('basement-length').addEventListener('input', updatePerimeter);
document.getElementById('basement-width').addEventListener('input', updatePerimeter);

function updatePerimeter() {
    const length = parseFloat(document.getElementById('basement-length').value) || 0;
    const width = parseFloat(document.getElementById('basement-width').value) || 0;
    const perimeter = 2 * (length + width);
    document.getElementById('perimeter').textContent = perimeter;
}

function showStep(step) {
    document.querySelectorAll('.calc-step').forEach(s => s.classList.remove('active'));
    document.querySelector(`[data-step="${step}"]`).classList.add('active');
    
    // Update navigation buttons
    document.querySelector('.prev').style.display = step === 1 ? 'none' : 'block';
    document.querySelector('.next').style.display = step === totalSteps ? 'none' : 'block';
    document.querySelector('.calculate').style.display = step === totalSteps ? 'block' : 'none';
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

function calculateCost() {
    // Get all inputs
    const length = parseFloat(document.getElementById('basement-length').value);
    const width = parseFloat(document.getElementById('basement-width').value);
    const perimeter = parseFloat(document.getElementById('perimeter').textContent);
    const area = length * width;
    const waterproofingType = document.querySelector('input[name="waterproofing-type"]:checked').value;
    const timeline = document.querySelector('input[name="timeline"]:checked');
    const timelineMultiplier = parseFloat(timeline.dataset.multiplier);
    const location = document.querySelector('input[name="location"]:checked');
    const maxRebate = parseFloat(location.dataset.rebate);
    const additions = Array.from(document.querySelectorAll('input[name="additions"]:checked'))
        .map(cb => ({name: cb.value, cost: parseFloat(cb.dataset.cost)}));
    
    // Calculate material quantities and costs
    const materials = calculateMaterials(waterproofingType, perimeter, area);
    const labor = calculateLabor(waterproofingType, perimeter);
    
    // Calculate base costs
    let minCost = materials.minCost + labor.minCost;
    let maxCost = materials.maxCost + labor.maxCost;
    let breakdown = [];
    
    // Apply seasonal/timeline multiplier
    minCost *= timelineMultiplier;
    maxCost *= timelineMultiplier;
    
    // Waterproofing base cost
    const systemName = {
        'interior': 'Interior Waterproofing System',
        'exterior': 'Exterior Waterproofing System', 
        'both': 'Complete Interior + Exterior System'
    }[waterproofingType];
    
    breakdown.push({
        item: systemName,
        cost: `$${Math.round(minCost).toLocaleString()} - $${Math.round(maxCost).toLocaleString()}`
    });
    
    // Add timeline adjustment if not standard
    if (timelineMultiplier !== 1.0) {
        const timelineName = timeline.parentElement.querySelector('strong').textContent;
        const adjustment = timelineMultiplier > 1 ? 'surcharge' : 'discount';
        const percentage = Math.abs(Math.round((timelineMultiplier - 1) * 100));
        breakdown.push({
            item: `${timelineName} ${adjustment}`,
            cost: `${timelineMultiplier > 1 ? '+' : '-'}${percentage}%`
        });
    }
    
    // Add additional services
    additions.forEach(addition => {
        const addMin = addition.cost * 0.8 * timelineMultiplier;
        const addMax = addition.cost * 1.5 * timelineMultiplier;
        minCost += addMin;
        maxCost += addMax;
        
        let itemName = addition.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        breakdown.push({item: itemName, cost: `$${Math.round(addMin).toLocaleString()} - $${Math.round(addMax).toLocaleString()}`});
    });
    
    // Calculate available rebates
    const rebates = calculateRebates(additions, maxRebate, location.value);
    const netMinCost = Math.max(0, minCost - rebates.total);
    const netMaxCost = Math.max(0, maxCost - rebates.total);
    
    // Display main results
    document.getElementById('min-cost').textContent = Math.round(minCost).toLocaleString();
    document.getElementById('max-cost').textContent = Math.round(maxCost).toLocaleString();
    document.getElementById('net-min-cost').textContent = Math.round(netMinCost).toLocaleString();
    document.getElementById('net-max-cost').textContent = Math.round(netMaxCost).toLocaleString();
    
    // Populate all result tabs
    populateBreakdownTab(breakdown, rebates, location.value);
    populateMaterialsTab(materials, labor, timeline.parentElement.querySelector('strong').textContent);
    populateComparisonTab(perimeter, area, timeline.parentElement.querySelector('strong').textContent);
    populateROITab(minCost, maxCost, area);
    populateFinancingTab(netMinCost, netMaxCost);
    
    // Show results
    document.getElementById('calc-form').style.display = 'none';
    document.getElementById('calc-results').style.display = 'block';
}

function calculateMaterials(type, perimeter, area) {
    const pricing = materialPricing[type === 'both' ? 'exterior' : type];
    let materials = {
        items: [],
        minCost: 0,
        maxCost: 0
    };
    
    if (type === 'interior' || type === 'both') {
        // Interior materials
        const fabricSqFt = area * 1.1; // 10% waste factor
        const membraneSqFt = area;
        const pipeFt = perimeter;
        const gravelYards = (perimeter * 2) / 27; // 2 ft wide, 1 ft deep trench
        
        materials.items.push(
            {name: 'Waterproof Fabric', quantity: `${Math.round(fabricSqFt)} sq ft`, unitCost: pricing.fabric, total: fabricSqFt * pricing.fabric},
            {name: 'Interior Membrane', quantity: `${Math.round(membraneSqFt)} sq ft`, unitCost: pricing.membrane, total: membraneSqFt * pricing.membrane},
            {name: '4" Weeping Tile', quantity: `${Math.round(pipeFt)} ft`, unitCost: pricing.pipe, total: pipeFt * pricing.pipe},
            {name: 'Drainage Gravel', quantity: `${Math.round(gravelYards)} yards`, unitCost: pricing.gravel, total: gravelYards * pricing.gravel}
        );
    }
    
    if (type === 'exterior' || type === 'both') {
        // Exterior materials
        const exteriorPricing = materialPricing.exterior;
        const wallHeight = 8; // average basement wall height
        const excavationFt = perimeter;
        const membraneSqFt = perimeter * wallHeight;
        const fabricSqFt = membraneSqFt * 1.1;
        const pipeFt = perimeter;
        const gravelYards = (perimeter * 3 * 2) / 27; // 3 ft wide, 2 ft deep
        
        if (type === 'exterior') {
            materials.items = [];
        }
        
        materials.items.push(
            {name: 'Excavation', quantity: `${Math.round(excavationFt)} ft`, unitCost: exteriorPricing.excavation, total: excavationFt * exteriorPricing.excavation},
            {name: 'Exterior Membrane', quantity: `${Math.round(membraneSqFt)} sq ft`, unitCost: exteriorPricing.membrane, total: membraneSqFt * exteriorPricing.membrane},
            {name: 'Protection Fabric', quantity: `${Math.round(fabricSqFt)} sq ft`, unitCost: exteriorPricing.fabric, total: fabricSqFt * exteriorPricing.fabric},
            {name: '6" Weeping Tile', quantity: `${Math.round(pipeFt)} ft`, unitCost: exteriorPricing.pipe, total: pipeFt * exteriorPricing.pipe},
            {name: 'Drainage Gravel', quantity: `${Math.round(gravelYards)} yards`, unitCost: exteriorPricing.gravel, total: gravelYards * exteriorPricing.gravel}
        );
    }
    
    materials.minCost = materials.items.reduce((sum, item) => sum + item.total, 0) * 0.9;
    materials.maxCost = materials.items.reduce((sum, item) => sum + item.total, 0) * 1.15;
    
    return materials;
}

function calculateLabor(type, perimeter) {
    let totalHours = 0;
    let crewSize = 2;
    let hourlyRate = 65;
    
    if (type === 'interior') {
        totalHours = perimeter * laborRates.interior.hoursPerLinearFoot;
        crewSize = laborRates.interior.crewSize;
        hourlyRate = laborRates.interior.hourlyRate;
    } else if (type === 'exterior') {
        totalHours = perimeter * laborRates.exterior.hoursPerLinearFoot;
        crewSize = laborRates.exterior.crewSize;
        hourlyRate = laborRates.exterior.hourlyRate;
    } else { // both
        totalHours = perimeter * (laborRates.interior.hoursPerLinearFoot + laborRates.exterior.hoursPerLinearFoot * 0.8);
        crewSize = 3;
        hourlyRate = 70;
    }
    
    const laborCost = totalHours * crewSize * hourlyRate;
    const workDays = Math.ceil(totalHours / (8 * crewSize));
    
    return {
        hours: totalHours,
        crewSize: crewSize,
        workDays: workDays,
        hourlyRate: hourlyRate,
        minCost: laborCost * 0.9,
        maxCost: laborCost * 1.2
    };
}

function calculateRebates(additions, maxRebate, location) {
    let rebates = {
        items: [],
        total: 0
    };
    
    // Location-specific rebate programs
    const rebatePrograms = {
        'toronto': {
            sumpPump: 1750,
            backwaterValve: 1250,
            severance: 400,
            name: 'Toronto Basement Flooding Protection Subsidy Program'
        },
        'mississauga': {
            sumpPump: 1500,
            backwaterValve: 1000,
            severance: 300,
            name: 'Mississauga Flood Reduction Program'
        },
        'brampton': {
            sumpPump: 1250,
            backwaterValve: 900,
            severance: 350,
            name: 'Brampton Residential Flood Reduction Program'
        },
        'markham': {
            sumpPump: 1000,
            backwaterValve: 800,
            severance: 400,
            name: 'York Region Basement Flooding Program'
        },
        'other': {
            sumpPump: 750,
            backwaterValve: 500,
            severance: 250,
            name: 'Provincial Rebate Programs'
        }
    };
    
    const program = rebatePrograms[location];
    
    // Check for eligible additions
    additions.forEach(addition => {
        if (addition.name === 'sump-pump') {
            rebates.items.push({name: 'Sump Pump Rebate', amount: program.sumpPump});
            rebates.total += program.sumpPump;
        }
    });
    
    // Backwater valve is often included with sump pump
    if (additions.some(a => a.name === 'sump-pump')) {
        rebates.items.push({name: 'Backwater Valve Rebate', amount: program.backwaterValve});
        rebates.total += program.backwaterValve;
    }
    
    // Severance/capping rebate (general waterproofing)
    rebates.items.push({name: 'Foundation Waterproofing Rebate', amount: program.severance});
    rebates.total += program.severance;
    
    rebates.program = program.name;
    rebates.total = Math.min(rebates.total, maxRebate);
    
    return rebates;
}

function resetCalculator() {
    currentStep = 1;
    showStep(1);
    document.getElementById('calc-form').style.display = 'block';
    document.getElementById('calc-results').style.display = 'none';
}

function scheduleInspection() {
    // This would open a scheduling form or redirect
    window.location.href = '/contact#inspection-form';
}

// Analytics tracking for calculator usage
function trackCalculatorStep(step) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'calculator_step', {
            'event_category': 'waterproofing_calculator',
            'event_label': `step_${step}`,
            'value': step
        });
    }
}

function trackCalculatorCompletion(minCost, maxCost, type) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'calculator_completion', {
            'event_category': 'waterproofing_calculator',
            'event_label': type,
            'value': Math.round((minCost + maxCost) / 2)
        });
    }
}

// Enhanced step navigation with tracking
function nextStep() {
    if (currentStep < totalSteps) {
        currentStep++;
        showStep(currentStep);
        trackCalculatorStep(currentStep);
    }
}

function previousStep() {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
    }
}

// Additional helper functions
function populateBreakdownTab(breakdown, rebates, location) {
    const breakdownList = document.getElementById('breakdown-list');
    breakdownList.innerHTML = breakdown.map(item => 
        `<li><span>${item.item}</span><span>${item.cost}</span></li>`
    ).join('');
    
    // Update rebate information
    const rebateTitle = document.getElementById('rebate-title');
    const rebateDetails = document.getElementById('rebate-details');
    
    rebateTitle.textContent = `${rebates.program} - Up to $${rebates.total.toLocaleString()}`;
    
    rebateDetails.innerHTML = `
        <p>Based on your location (${location.charAt(0).toUpperCase() + location.slice(1)}) and selected services:</p>
        <ul>
            ${rebates.items.map(rebate => `<li>${rebate.name}: $${rebate.amount.toLocaleString()}</li>`).join('')}
        </ul>
        <p><strong>Total Available Rebates: $${rebates.total.toLocaleString()}</strong></p>
        <p><em>Rebates are subject to eligibility requirements and program availability.</em></p>
    `;
}

function populateMaterialsTab(materials, labor, timeline) {
    const materialsList = document.getElementById('materials-list');
    const laborDetails = document.getElementById('labor-details');
    
    // Materials breakdown
    materialsList.innerHTML = `
        <div class="materials-breakdown">
            <h4>Required Materials:</h4>
            <table class="materials-table">
                <thead>
                    <tr><th>Material</th><th>Quantity</th><th>Unit Cost</th><th>Total</th></tr>
                </thead>
                <tbody>
                    ${materials.items.map(item => `
                        <tr>
                            <td>${item.name}</td>
                            <td>${item.quantity}</td>
                            <td>$${item.unitCost.toFixed(2)}</td>
                            <td>$${Math.round(item.total).toLocaleString()}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
            <div class="materials-total">
                <strong>Materials Subtotal: $${Math.round(materials.minCost).toLocaleString()} - $${Math.round(materials.maxCost).toLocaleString()}</strong>
            </div>
        </div>
    `;
    
    // Labor breakdown
    laborDetails.innerHTML = `
        <div class="labor-breakdown">
            <div class="labor-stats">
                <div class="stat-item">
                    <span class="stat-label">Total Hours:</span>
                    <span class="stat-value">${Math.round(labor.hours)} hours</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Crew Size:</span>
                    <span class="stat-value">${labor.crewSize} workers</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Work Days:</span>
                    <span class="stat-value">${labor.workDays} days</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Timeline:</span>
                    <span class="stat-value">${timeline}</span>
                </div>
            </div>
            <div class="labor-cost">
                <strong>Labor Cost: $${Math.round(labor.minCost).toLocaleString()} - $${Math.round(labor.maxCost).toLocaleString()}</strong>
            </div>
        </div>
    `;
}

function populateComparisonTab(perimeter, area, timeline) {
    const comparisonTable = document.getElementById('solution-comparison');
    
    // Calculate costs for different solutions
    const solutions = [
        {
            name: 'Interior Only',
            cost: {min: perimeter * 70, max: perimeter * 100},
            pros: ['Less expensive', 'No excavation', 'Works year-round', 'Finished basement friendly'],
            cons: ['Doesn\'t address source', 'Ongoing maintenance', 'Limited effectiveness']
        },
        {
            name: 'Exterior Only',
            cost: {min: perimeter * 100, max: perimeter * 350},
            pros: ['Addresses water source', 'Long-term solution', 'Protects foundation', 'Increases home value'],
            cons: ['Higher cost', 'Seasonal restrictions', 'Landscape disruption']
        },
        {
            name: 'Combined System',
            cost: {min: perimeter * 150, max: perimeter * 400},
            pros: ['Maximum protection', 'Redundant systems', 'Best warranty', 'Highest ROI'],
            cons: ['Highest upfront cost', 'Longer installation']
        },
        {
            name: 'Sump Pump Only',
            cost: {min: 2000, max: 4000},
            pros: ['Quick installation', 'Low cost', 'Emergency solution'],
            cons: ['Reactive not preventive', 'Power dependent', 'Limited protection']
        }
    ];
    
    comparisonTable.innerHTML = `
        <div class="comparison-grid">
            ${solutions.map(solution => `
                <div class="solution-card">
                    <h4>${solution.name}</h4>
                    <div class="solution-cost">
                        $${solution.cost.min.toLocaleString()} - $${solution.cost.max.toLocaleString()}
                    </div>
                    <div class="pros-cons">
                        <div class="pros">
                            <h5>✅ Pros:</h5>
                            <ul>
                                ${solution.pros.map(pro => `<li>${pro}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="cons">
                            <h5>❌ Cons:</h5>
                            <ul>
                                ${solution.cons.map(con => `<li>${con}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function populateROITab(minCost, maxCost, area) {
    const roiAnalysis = document.getElementById('roi-analysis');
    
    // Calculate ROI metrics
    const avgCost = (minCost + maxCost) / 2;
    const homeValueIncrease = area * 15; // $15 per sq ft value increase
    const energySavings = 250; // annual energy savings
    const insuranceSavings = 150; // annual insurance savings
    const maintenanceSavings = 400; // annual maintenance savings
    const annualSavings = energySavings + insuranceSavings + maintenanceSavings;
    const paybackPeriod = avgCost / (annualSavings + homeValueIncrease * 0.05); // 5% appreciation rate
    
    roiAnalysis.innerHTML = `
        <div class="roi-metrics-grid">
            <div class="roi-metric">
                <h4>🏠 Home Value Increase</h4>
                <div class="metric-value">$${homeValueIncrease.toLocaleString()}</div>
                <p>Based on $15/sq ft for waterproofed basements</p>
            </div>
            
            <div class="roi-metric">
                <h4>💰 Annual Savings</h4>
                <div class="metric-value">$${annualSavings.toLocaleString()}</div>
                <div class="savings-breakdown">
                    <div>Energy costs: $${energySavings}</div>
                    <div>Insurance: $${insuranceSavings}</div>
                    <div>Maintenance: $${maintenanceSavings}</div>
                </div>
            </div>
            
            <div class="roi-metric">
                <h4>⏱️ Payback Period</h4>
                <div class="metric-value">${Math.round(paybackPeriod)} years</div>
                <p>Including home value appreciation</p>
            </div>
            
            <div class="roi-metric">
                <h4>📈 10-Year ROI</h4>
                <div class="metric-value">${Math.round(((annualSavings * 10 + homeValueIncrease) / avgCost - 1) * 100)}%</div>
                <p>Total return on investment</p>
            </div>
        </div>
        
        <div class="roi-details">
            <h4>Why Waterproofing Is a Smart Investment:</h4>
            <ul>
                <li><strong>Prevents major damage:</strong> One flooding event can cost $25,000+ to repair</li>
                <li><strong>Reduces insurance claims:</strong> Many insurers offer discounts for preventive waterproofing</li>
                <li><strong>Energy efficiency:</strong> Dry basements require less dehumidification and heating</li>
                <li><strong>Health benefits:</strong> Prevents mold and improves indoor air quality</li>
                <li><strong>Usable space:</strong> Transforms basement into valuable living area</li>
            </ul>
        </div>
    `;
}

function populateFinancingTab(netMinCost, netMaxCost) {
    const avgCost = (netMinCost + netMaxCost) / 2;
    
    // Calculate payment options
    const terms = [
        {months: 12, rate: 0, name: '0% Interest'},
        {months: 24, rate: 6.9, name: 'Low Rate 24 months'},
        {months: 48, rate: 8.9, name: 'Extended 48 months'},
        {months: 60, rate: 9.9, name: 'Maximum 60 months'}
    ];
    
    terms.forEach(term => {
        const monthlyRate = term.rate / 100 / 12;
        let monthlyPayment;
        let totalCost;
        
        if (term.rate === 0) {
            monthlyPayment = avgCost / term.months;
            totalCost = avgCost;
        } else {
            monthlyPayment = avgCost * (monthlyRate * Math.pow(1 + monthlyRate, term.months)) / (Math.pow(1 + monthlyRate, term.months) - 1);
            totalCost = monthlyPayment * term.months;
        }
        
        const monthlyId = term.months === 12 ? 'monthly-0' : `monthly-${term.months}`;
        const totalId = term.months === 12 ? 'total-0' : `total-${term.months}`;
        
        document.getElementById(monthlyId).textContent = Math.round(monthlyPayment).toLocaleString();
        document.getElementById(totalId).textContent = Math.round(totalCost).toLocaleString();
    });
    
    // Set up custom calculator
    document.getElementById('loan-amount').textContent = Math.round(avgCost).toLocaleString();
    updateCustomPayment();
}

function updateCustomPayment() {
    const loanAmount = (parseFloat(document.getElementById('net-min-cost').textContent.replace(/,/g, '')) + 
                       parseFloat(document.getElementById('net-max-cost').textContent.replace(/,/g, ''))) / 2;
    const term = parseFloat(document.getElementById('custom-term').value);
    const rate = parseFloat(document.getElementById('custom-rate').value) / 100 / 12;
    
    let monthlyPayment;
    if (rate === 0) {
        monthlyPayment = loanAmount / term;
    } else {
        monthlyPayment = loanAmount * (rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
    }
    
    document.getElementById('custom-monthly').textContent = Math.round(monthlyPayment).toLocaleString();
}

function showResultsTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.results-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    
    // Show selected tab
    document.getElementById(`${tabName}-tab`).classList.add('active');
    event.target.classList.add('active');
}

// Initialize
showStep(1);
</script>