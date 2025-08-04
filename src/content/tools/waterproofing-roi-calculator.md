---
title: "Basement Waterproofing ROI Calculator | Investment Return Analysis"
description: "Calculate your return on investment for basement waterproofing. See how much you save with prevented damage, energy costs, home value increase, and insurance savings."
date: 2025-01-31
draft: false
type: "tools"
---

# Basement Waterproofing ROI Calculator

Understand the true value of your waterproofing investment. This calculator shows your return on investment through prevented damage costs, energy savings, increased home value, and insurance premium reductions.

**Related Pages**: Learn about our [basement waterproofing services](/basement-waterproofing/), explore [cost factors](/tools/waterproofing-cost-calculator/), or discover [available rebates](/waterproofing-rebates-2025/). For immediate assistance, visit our [emergency services](/emergency/24-hour-emergency-waterproofing/) page.

<div id="roi-calculator" class="roi-calculator-container">
    <div class="calculator-header">
        <h2>Calculate Your Waterproofing ROI</h2>
        <p>See the financial benefits of protecting your basement investment</p>
    </div>

    <form id="roi-calc-form" class="roi-calculator-form">
        <!-- Step 1: Property Information -->
        <div class="roi-step active" data-step="1">
            <h3>📊 Property Information</h3>
            <div class="input-row">
                <div class="input-group">
                    <label for="home-value">Current Home Value</label>
                    <input type="number" id="home-value" min="100000" max="5000000" value="750000" required>
                    <small>Your property's current market value</small>
                </div>
                <div class="input-group">
                    <label for="basement-area">Basement Square Footage</label>
                    <input type="number" id="basement-area" min="200" max="5000" value="1200" required>
                    <small>Total basement area</small>
                </div>
            </div>
            <div class="input-group">
                <label for="home-age">Home Age (years)</label>
                <select id="home-age">
                    <option value="new">0-5 years (New)</option>
                    <option value="modern" selected>6-20 years (Modern)</option>
                    <option value="mature">21-40 years (Mature)</option>
                    <option value="older">41-60 years (Older)</option>
                    <option value="heritage">60+ years (Heritage)</option>
                </select>
            </div>
        </div>

        <!-- Step 2: Investment Details -->
        <div class="roi-step" data-step="2">
            <h3>💰 Investment Details</h3>
            <div class="input-group">
                <label for="waterproofing-cost">Waterproofing Investment</label>
                <input type="number" id="waterproofing-cost" min="5000" max="100000" value="18000" required>
                <small>Total cost of your waterproofing project</small>
            </div>
            <div class="input-group">
                <label for="system-type">Waterproofing System</label>
                <select id="system-type">
                    <option value="interior">Interior Waterproofing</option>
                    <option value="exterior" selected>Exterior Waterproofing</option>
                    <option value="comprehensive">Comprehensive (Interior + Exterior)</option>
                </select>
            </div>
            <div class="checkbox-group">
                <h4>Additional Systems</h4>
                <label class="checkbox-option">
                    <input type="checkbox" name="additions" value="sump-pump" data-value-add="2500">
                    <span>Sump Pump System (+$2,500 home value)</span>
                </label>
                <label class="checkbox-option">
                    <input type="checkbox" name="additions" value="dehumidifier" data-value-add="1200">
                    <span>Whole-Home Dehumidifier (+$1,200 home value)</span>
                </label>
                <label class="checkbox-option">
                    <input type="checkbox" name="additions" value="drainage" data-value-add="3000">
                    <span>French Drain System (+$3,000 home value)</span>
                </label>
            </div>
        </div>

        <!-- Step 3: Risk Assessment -->
        <div class="roi-step" data-step="3">
            <h3>⚠️ Risk Assessment</h3>
            <div class="input-group">
                <label for="current-issues">Current Water Issues</label>
                <select id="current-issues">
                    <option value="none">No current issues (preventive)</option>
                    <option value="minor">Minor dampness/humidity</option>
                    <option value="moderate" selected>Occasional water entry</option>
                    <option value="major">Active leaks/flooding</option>
                    <option value="severe">Severe water damage history</option>
                </select>
            </div>
            <div class="input-group">
                <label for="soil-risk">Soil & Drainage Risk</label>
                <select id="soil-risk">
                    <option value="low">Low risk (sandy, well-drained)</option>
                    <option value="moderate" selected>Moderate risk (mixed soil)</option>
                    <option value="high">High risk (clay, poor drainage)</option>
                    <option value="extreme">Extreme risk (flood zone, water table)</option>
                </select>
            </div>
            <div class="checkbox-group">
                <h4>Risk Factors</h4>
                <label class="checkbox-option">
                    <input type="checkbox" name="risk-factors" value="finished-basement">
                    <span>Finished basement with valuable contents</span>
                </label>
                <label class="checkbox-option">
                    <input type="checkbox" name="risk-factors" value="hvac-basement">
                    <span>HVAC/utilities in basement</span>
                </label>
                <label class="checkbox-option">
                    <input type="checkbox" name="risk-factors" value="rental-income">
                    <span>Basement generates rental income</span>
                </label>
            </div>
        </div>

        <!-- Step 4: Time Horizon -->
        <div class="roi-step" data-step="4">
            <h3>📅 Investment Timeline</h3>
            <div class="input-group">
                <label for="ownership-years">Expected Ownership Period</label>
                <select id="ownership-years">
                    <option value="5">5 years</option>
                    <option value="10" selected>10 years</option>
                    <option value="15">15 years</option>
                    <option value="20">20 years</option>
                    <option value="25">25+ years</option>
                </select>
            </div>
            <div class="input-group">
                <label for="energy-priority">Energy Efficiency Priority</label>
                <select id="energy-priority">
                    <option value="low">Low (basic efficiency)</option>
                    <option value="moderate" selected>Moderate (standard improvements)</option>
                    <option value="high">High (comprehensive efficiency upgrades)</option>
                </select>
            </div>
        </div>

        <!-- Navigation -->
        <div class="roi-navigation">
            <button type="button" class="roi-btn prev" onclick="previousROIStep()">Previous</button>
            <button type="button" class="roi-btn next" onclick="nextROIStep()">Next</button>
            <button type="button" class="roi-btn calculate" onclick="calculateROI()" style="display:none;">Calculate ROI</button>
        </div>
    </form>

    <!-- Results Section -->
    <div id="roi-results" class="roi-results" style="display:none;">
        <div class="roi-summary">
            <h2>🎯 Your ROI Analysis</h2>
            <div class="roi-headline">
                <div class="roi-percentage">
                    <span class="label">Total ROI:</span>
                    <span class="value" id="total-roi">0%</span>
                </div>
                <div class="roi-dollar-return">
                    <span class="label">Net Return:</span>
                    <span class="value" id="net-return">$0</span>
                </div>
            </div>
        </div>

        <!-- ROI Breakdown Chart -->
        <div class="roi-breakdown">
            <h3>💡 Return Breakdown</h3>
            <div class="roi-chart" id="roi-chart"></div>
            <div class="roi-details">
                <div class="roi-item">
                    <span class="roi-icon">🏠</span>
                    <div class="roi-item-content">
                        <h4>Home Value Increase</h4>
                        <span class="roi-amount" id="home-value-increase">$0</span>
                        <small>Immediate equity gain</small>
                    </div>
                </div>
                <div class="roi-item">
                    <span class="roi-icon">🛡️</span>
                    <div class="roi-item-content">
                        <h4>Damage Prevention</h4>
                        <span class="roi-amount" id="damage-prevention">$0</span>
                        <small>Avoided repair costs</small>
                    </div>
                </div>
                <div class="roi-item">
                    <span class="roi-icon">⚡</span>
                    <div class="roi-item-content">
                        <h4>Energy Savings</h4>
                        <span class="roi-amount" id="energy-savings">$0</span>
                        <small>Annual heating/cooling reduction</small>
                    </div>
                </div>
                <div class="roi-item">
                    <span class="roi-icon">🛡️</span>
                    <div class="roi-item-content">
                        <h4>Insurance Savings</h4>
                        <span class="roi-amount" id="insurance-savings">$0</span>
                        <small>Premium reductions</small>
                    </div>
                </div>
            </div>
        </div>

        <!-- Timeline Visualization -->
        <div class="roi-timeline">
            <h3>📈 Value Over Time</h3>
            <div class="timeline-chart" id="timeline-chart">
                <div class="timeline-year" data-year="Year 1">
                    <div class="timeline-bar">
                        <div class="timeline-fill" style="height: 20%"></div>
                    </div>
                    <span class="timeline-label">1</span>
                    <span class="timeline-value" id="year-1-value">$0</span>
                </div>
                <div class="timeline-year" data-year="Year 5">
                    <div class="timeline-bar">
                        <div class="timeline-fill" style="height: 60%"></div>
                    </div>
                    <span class="timeline-label">5</span>
                    <span class="timeline-value" id="year-5-value">$0</span>
                </div>
                <div class="timeline-year" data-year="Year 10">
                    <div class="timeline-bar">
                        <div class="timeline-fill" style="height: 100%"></div>
                    </div>
                    <span class="timeline-label">10</span>
                    <span class="timeline-value" id="year-10-value">$0</span>
                </div>
            </div>
        </div>

        <!-- Additional Benefits -->
        <div class="additional-benefits">
            <h3>🌟 Additional Benefits</h3>
            <div class="benefits-grid">
                <div class="benefit-item">
                    <h4>Health & Comfort</h4>
                    <ul>
                        <li>Reduced mold and allergens</li>
                        <li>Improved indoor air quality</li>
                        <li>Comfortable basement environment</li>
                    </ul>
                </div>
                <div class="benefit-item">
                    <h4>Peace of Mind</h4>
                    <ul>
                        <li>24/7 water damage protection</li>
                        <li>Lifetime transferable warranty</li>
                        <li>Professional monitoring systems</li>
                    </ul>
                </div>
                <div class="benefit-item">
                    <h4>Usable Space</h4>
                    <ul>
                        <li>Safe storage for valuables</li>
                        <li>Potential rental income</li>
                        <li>Recreational/office space</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Financing Impact -->
        <div class="financing-impact">
            <h3>💳 Financing Impact on ROI</h3>
            <div class="financing-options">
                <div class="financing-card">
                    <h4>Cash Payment</h4>
                    <div class="financing-detail">
                        <span>Immediate ROI:</span>
                        <strong id="cash-roi">0%</strong>
                    </div>
                    <div class="financing-detail">
                        <span>Year 1 Return:</span>
                        <strong id="cash-year1">$0</strong>
                    </div>
                </div>
                <div class="financing-card">
                    <h4>12-Month 0% Financing</h4>
                    <div class="financing-detail">
                        <span>Monthly Payment:</span>
                        <strong id="financing-monthly">$0</strong>
                    </div>
                    <div class="financing-detail">
                        <span>ROI with Financing:</span>
                        <strong id="financing-roi">0%</strong>
                    </div>
                </div>
            </div>
        </div>

        <!-- Action Section -->
        <div class="roi-cta-section">
            <h3>🚀 Ready to Secure Your Investment?</h3>
            <p>Your analysis shows waterproofing is a smart financial decision. Get started with a free professional assessment.</p>
            <div class="roi-cta-buttons">
                <a href="tel:4375450067" class="roi-cta-btn primary">
                    📞 Call (437) 545-0067
                </a>
                <button class="roi-cta-btn secondary" onclick="scheduleROIConsultation()">
                    📋 Free ROI Consultation
                </button>
                <button class="roi-cta-btn tertiary" onclick="downloadROIReport()">
                    📄 Download Report
                </button>
            </div>
            <div class="guarantee-note">
                <small>⭐ Lifetime warranty included | ⭐ Up to $3,400 in available rebates | ⭐ 0% financing available</small>
            </div>
        </div>

        <button class="roi-btn recalculate" onclick="resetROICalculator()">Recalculate</button>
    </div>
</div>

<style>
.roi-calculator-container {
    max-width: 900px;
    margin: 2rem auto;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    border-radius: 16px;
    padding: 2.5rem;
    box-shadow: 0 8px 32px rgba(0,0,0,0.1);
}

.calculator-header {
    text-align: center;
    margin-bottom: 2.5rem;
}

.calculator-header h2 {
    color: #1e40af;
    margin-bottom: 0.75rem;
    font-size: 2rem;
    font-weight: 700;
}

.calculator-header p {
    color: #64748b;
    font-size: 1.125rem;
}

.roi-step {
    display: none;
    animation: slideInUp 0.4s ease;
    background: white;
    padding: 2rem;
    border-radius: 12px;
    margin-bottom: 2rem;
    box-shadow: 0 4px 16px rgba(0,0,0,0.05);
}

.roi-step.active {
    display: block;
}

@keyframes slideInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.roi-step h3 {
    color: #1a1a1a;
    margin-bottom: 1.5rem;
    font-size: 1.375rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.input-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
}

.input-group {
    margin-bottom: 1.5rem;
}

.input-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #374151;
    font-size: 1rem;
}

.input-group input, .input-group select {
    width: 100%;
    padding: 0.875rem;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.2s;
    background: white;
}

.input-group input:focus, .input-group select:focus {
    outline: none;
    border-color: #1e40af;
    box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.1);
}

.input-group small {
    display: block;
    margin-top: 0.375rem;
    color: #6b7280;
    font-size: 0.875rem;
}

.checkbox-group {
    margin-top: 1rem;
}

.checkbox-group h4 {
    margin-bottom: 1rem;
    color: #374151;
    font-size: 1rem;
}

.checkbox-option {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem;
    background: #f9fafb;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    margin-bottom: 0.5rem;
    cursor: pointer;
    transition: all 0.2s;
}

.checkbox-option:hover {
    background: #f3f4f6;
    border-color: #1e40af;
}

.checkbox-option input[type="checkbox"] {
    width: auto;
    margin: 0;
}

.checkbox-option input[type="checkbox"]:checked + span {
    color: #1e40af;
    font-weight: 600;
}

.roi-navigation {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    gap: 1rem;
}

.roi-btn {
    padding: 0.875rem 2rem;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 1rem;
}

.roi-btn.prev {
    background: #e5e7eb;
    color: #4a5568;
}

.roi-btn.next, .roi-btn.calculate {
    background: #1e40af;
    color: white;
}

.roi-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.15);
}

.roi-results {
    animation: fadeInScale 0.6s ease;
}

@keyframes fadeInScale {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
}

.roi-summary {
    background: linear-gradient(135deg, #1e40af, #1e3a8a);
    color: white;
    padding: 2.5rem;
    border-radius: 16px;
    text-align: center;
    margin-bottom: 2rem;
}

.roi-headline {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-top: 1.5rem;
}

.roi-percentage .value, .roi-dollar-return .value {
    display: block;
    font-size: 3rem;
    font-weight: 800;
    margin-top: 0.5rem;
}

.roi-percentage .label, .roi-dollar-return .label {
    display: block;
    font-size: 1.125rem;
    opacity: 0.9;
}

.roi-breakdown {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    margin-bottom: 2rem;
    box-shadow: 0 4px 16px rgba(0,0,0,0.05);
}

.roi-breakdown h3 {
    margin-bottom: 1.5rem;
    color: #1a1a1a;
    font-size: 1.375rem;
}

.roi-chart {
    height: 200px;
    background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%);
    border-radius: 8px;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1e40af;
    font-weight: 600;
}

.roi-details {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
}

.roi-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.25rem;
    background: #f8fafc;
    border-radius: 8px;
    border-left: 4px solid #1e40af;
}

.roi-icon {
    font-size: 2rem;
}

.roi-item-content h4 {
    margin-bottom: 0.25rem;
    color: #1a1a1a;
    font-size: 1rem;
}

.roi-amount {
    font-size: 1.375rem;
    font-weight: 700;
    color: #059669;
    display: block;
}

.roi-item-content small {
    color: #6b7280;
    font-size: 0.875rem;
}

.roi-timeline {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    margin-bottom: 2rem;
    box-shadow: 0 4px 16px rgba(0,0,0,0.05);
}

.roi-timeline h3 {
    margin-bottom: 1.5rem;
    color: #1a1a1a;
    font-size: 1.375rem;
}

.timeline-chart {
    display: flex;
    justify-content: space-around;
    align-items: end;
    height: 200px;
    background: #f8fafc;
    border-radius: 8px;
    padding: 1rem;
}

.timeline-year {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
}

.timeline-bar {
    width: 60px;
    height: 150px;
    background: #e5e7eb;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
}

.timeline-fill {
    background: linear-gradient(180deg, #1e40af 0%, #1e3a8a 100%);
    width: 100%;
    position: absolute;
    bottom: 0;
    border-radius: 4px 4px 0 0;
    transition: height 0.6s ease;
}

.timeline-label {
    font-weight: 600;
    color: #374151;
}

.timeline-value {
    font-size: 0.875rem;
    font-weight: 700;
    color: #059669;
}

.additional-benefits {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    margin-bottom: 2rem;
    box-shadow: 0 4px 16px rgba(0,0,0,0.05);
}

.additional-benefits h3 {
    margin-bottom: 1.5rem;
    color: #1a1a1a;
    font-size: 1.375rem;
}

.benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.benefit-item h4 {
    color: #1e40af;
    margin-bottom: 1rem;
    font-size: 1.125rem;
}

.benefit-item ul {
    list-style: none;
    padding: 0;
}

.benefit-item li {
    padding: 0.5rem 0;
    color: #4a5568;
    border-bottom: 1px solid #f1f5f9;
    position: relative;
    padding-left: 1.5rem;
}

.benefit-item li:before {
    content: "✓";
    color: #059669;
    font-weight: bold;
    position: absolute;
    left: 0;
}

.financing-impact {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    margin-bottom: 2rem;
    box-shadow: 0 4px 16px rgba(0,0,0,0.05);
}

.financing-impact h3 {
    margin-bottom: 1.5rem;
    color: #1a1a1a;
    font-size: 1.375rem;
}

.financing-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
}

.financing-card {
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    padding: 1.5rem;
    border-radius: 8px;
    border: 2px solid #e5e7eb;
}

.financing-card h4 {
    color: #1e40af;
    margin-bottom: 1rem;
    font-size: 1.125rem;
}

.financing-detail {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    color: #4a5568;
}

.financing-detail strong {
    color: #059669;
    font-weight: 700;
}

.roi-cta-section {
    background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
    padding: 2.5rem;
    border-radius: 12px;
    text-align: center;
    margin-bottom: 2rem;
}

.roi-cta-section h3 {
    color: #1e40af;
    margin-bottom: 1rem;
    font-size: 1.5rem;
}

.roi-cta-section p {
    color: #4a5568;
    margin-bottom: 2rem;
    font-size: 1.125rem;
}

.roi-cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
}

.roi-cta-btn {
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
    font-size: 1rem;
}

.roi-cta-btn.primary {
    background: #1e40af;
    color: white;
}

.roi-cta-btn.secondary {
    background: white;
    color: #1e40af;
    border: 2px solid #1e40af;
}

.roi-cta-btn.tertiary {
    background: #059669;
    color: white;
}

.roi-cta-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.15);
}

.guarantee-note {
    color: #374151;
    font-style: italic;
}

.recalculate {
    display: block;
    margin: 0 auto;
    background: #6b7280;
    color: white;
}

@media (max-width: 768px) {
    .roi-calculator-container {
        padding: 1.5rem;
    }
    
    .input-row {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
    
    .roi-headline {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    
    .roi-percentage .value, .roi-dollar-return .value {
        font-size: 2.5rem;
    }
    
    .roi-details {
        grid-template-columns: 1fr;
    }
    
    .timeline-chart {
        padding: 0.5rem;
    }
    
    .timeline-bar {
        width: 40px;
        height: 120px;
    }
    
    .benefits-grid {
        grid-template-columns: 1fr;
    }
    
    .financing-options {
        grid-template-columns: 1fr;
    }
    
    .roi-cta-buttons {
        flex-direction: column;
        align-items: center;
    }
}
</style>

<script>
let currentROIStep = 1;
const totalROISteps = 4;

function showROIStep(step) {
    document.querySelectorAll('.roi-step').forEach(s => s.classList.remove('active'));
    document.querySelector(`[data-step="${step}"]`).classList.add('active');
    
    // Update navigation buttons
    document.querySelector('.prev').style.display = step === 1 ? 'none' : 'block';
    document.querySelector('.next').style.display = step === totalROISteps ? 'none' : 'block';
    document.querySelector('.calculate').style.display = step === totalROISteps ? 'block' : 'none';
}

function nextROIStep() {
    if (currentROIStep < totalROISteps) {
        currentROIStep++;
        showROIStep(currentROIStep);
    }
}

function previousROIStep() {
    if (currentROIStep > 1) {
        currentROIStep--;
        showROIStep(currentROIStep);
    }
}

function calculateROI() {
    // Get all input values
    const homeValue = parseFloat(document.getElementById('home-value').value);
    const basementArea = parseFloat(document.getElementById('basement-area').value);
    const homeAge = document.getElementById('home-age').value;
    const waterproofingCost = parseFloat(document.getElementById('waterproofing-cost').value);
    const systemType = document.getElementById('system-type').value;
    const currentIssues = document.getElementById('current-issues').value;
    const soilRisk = document.getElementById('soil-risk').value;
    const ownershipYears = parseFloat(document.getElementById('ownership-years').value);
    const energyPriority = document.getElementById('energy-priority').value;
    
    // Get additional systems
    const additions = Array.from(document.querySelectorAll('input[name="additions"]:checked'))
        .map(cb => parseFloat(cb.dataset.valueAdd));
    const additionalValue = additions.reduce((sum, val) => sum + val, 0);
    
    // Get risk factors
    const riskFactors = Array.from(document.querySelectorAll('input[name="risk-factors"]:checked')).length;
    
    // Calculate home value increase
    let valueIncreaseMultiplier = 0.65; // Base 65% return on investment
    
    // Adjust based on system type
    switch(systemType) {
        case 'interior':
            valueIncreaseMultiplier = 0.60;
            break;
        case 'exterior':
            valueIncreaseMultiplier = 0.70;
            break;
        case 'comprehensive':
            valueIncreaseMultiplier = 0.80;
            break;
    }
    
    // Adjust based on home age
    const ageMultipliers = {
        'new': 0.85,
        'modern': 1.0,
        'mature': 1.1,
        'older': 1.2,
        'heritage': 1.3
    };
    valueIncreaseMultiplier *= ageMultipliers[homeAge] || 1.0;
    
    const homeValueIncrease = (waterproofingCost * valueIncreaseMultiplier) + additionalValue;
    
    // Calculate damage prevention savings
    const riskMultipliers = {
        'none': 0.3,
        'minor': 0.5,
        'moderate': 1.0,
        'major': 1.8,
        'severe': 2.5
    };
    
    const soilRiskMultipliers = {
        'low': 0.7,
        'moderate': 1.0,
        'high': 1.4,
        'extreme': 2.0
    };
    
    let baseDamageCost = basementArea * 45; // $45 per sq ft average damage cost
    baseDamageCost *= riskMultipliers[currentIssues] || 1.0;
    baseDamageCost *= soilRiskMultipliers[soilRisk] || 1.0;
    baseDamageCost *= (1 + (riskFactors * 0.3)); // 30% increase per risk factor
    
    const damagePrevention = baseDamageCost * ownershipYears * 0.15; // 15% annual chance
    
    // Calculate energy savings
    const energyMultipliers = {
        'low': 0.8,
        'moderate': 1.0,
        'high': 1.3
    };
    
    let annualEnergySavings = basementArea * 0.85; // $0.85 per sq ft per year
    annualEnergySavings *= energyMultipliers[energyPriority] || 1.0;
    const totalEnergySavings = annualEnergySavings * ownershipYears;
    
    // Calculate insurance savings
    const annualInsuranceSavings = Math.min(homeValue * 0.001, 800); // Up to $800/year
    const totalInsuranceSavings = annualInsuranceSavings * ownershipYears;
    
    // Calculate total returns
    const totalReturns = homeValueIncrease + damagePrevention + totalEnergySavings + totalInsuranceSavings;
    const netReturn = totalReturns - waterproofingCost;
    const roiPercentage = ((netReturn / waterproofingCost) * 100);
    
    // Update displays
    document.getElementById('total-roi').textContent = roiPercentage.toFixed(1) + '%';
    document.getElementById('net-return').textContent = '$' + netReturn.toLocaleString();
    document.getElementById('home-value-increase').textContent = '$' + homeValueIncrease.toLocaleString();
    document.getElementById('damage-prevention').textContent = '$' + damagePrevention.toLocaleString();
    document.getElementById('energy-savings').textContent = '$' + totalEnergySavings.toLocaleString();
    document.getElementById('insurance-savings').textContent = '$' + totalInsuranceSavings.toLocaleString();
    
    // Calculate timeline values
    const year1Value = homeValueIncrease + (annualEnergySavings + annualInsuranceSavings);
    const year5Value = homeValueIncrease + (totalEnergySavings * 0.5) + (totalInsuranceSavings * 0.5) + (damagePrevention * 0.33);
    const year10Value = totalReturns;
    
    document.getElementById('year-1-value').textContent = '$' + year1Value.toLocaleString();
    document.getElementById('year-5-value').textContent = '$' + year5Value.toLocaleString();
    document.getElementById('year-10-value').textContent = '$' + year10Value.toLocaleString();
    
    // Update timeline bar heights
    const maxValue = Math.max(year1Value, year5Value, year10Value);
    document.querySelector('[data-year="Year 1"] .timeline-fill').style.height = ((year1Value / maxValue) * 100) + '%';
    document.querySelector('[data-year="Year 5"] .timeline-fill').style.height = ((year5Value / maxValue) * 100) + '%';
    document.querySelector('[data-year="Year 10"] .timeline-fill').style.height = '100%';
    
    // Calculate financing options
    document.getElementById('cash-roi').textContent = roiPercentage.toFixed(1) + '%';
    document.getElementById('cash-year1').textContent = '$' + year1Value.toLocaleString();
    document.getElementById('financing-monthly').textContent = '$' + Math.round(waterproofingCost / 12).toLocaleString();
    document.getElementById('financing-roi').textContent = (roiPercentage * 1.05).toFixed(1) + '%'; // Slightly better with 0% financing
    
    // Update chart placeholder
    document.getElementById('roi-chart').innerHTML = `
        <div style="text-align: center;">
            <div style="font-size: 2rem; margin-bottom: 1rem;">📊</div>
            <div>Visual breakdown of your ${roiPercentage.toFixed(1)}% ROI</div>
            <div style="margin-top: 0.5rem; color: #6b7280; font-size: 0.875rem;">
                Home Value: ${((homeValueIncrease / totalReturns) * 100).toFixed(0)}% | 
                Damage Prevention: ${((damagePrevention / totalReturns) * 100).toFixed(0)}% | 
                Energy: ${((totalEnergySavings / totalReturns) * 100).toFixed(0)}% | 
                Insurance: ${((totalInsuranceSavings / totalReturns) * 100).toFixed(0)}%
            </div>
        </div>
    `;
    
    // Show results
    document.getElementById('roi-calc-form').style.display = 'none';
    document.getElementById('roi-results').style.display = 'block';
    
    // Scroll to results
    document.getElementById('roi-results').scrollIntoView({ behavior: 'smooth' });
}

function resetROICalculator() {
    currentROIStep = 1;
    showROIStep(1);
    document.getElementById('roi-calc-form').style.display = 'block';
    document.getElementById('roi-results').style.display = 'none';
    document.getElementById('roi-calculator').scrollIntoView({ behavior: 'smooth' });
}

function scheduleROIConsultation() {
    window.location.href = '/contact#roi-consultation';
}

function downloadROIReport() {
    // This would generate and download a PDF report
    alert('ROI Report download feature coming soon! Call (437) 545-0067 to request your personalized report.');
}

// Initialize
showROIStep(1);
</script>

## Why ROI Analysis Matters for Waterproofing

### Immediate Financial Benefits
- **Home value increase**: 60-80% return on investment
- **Insurance premium reductions**: Up to $800 annually
- **Energy cost savings**: Lower heating and cooling bills
- **Prevented damage costs**: Avoid thousands in water damage repairs

### Long-term Value Protection
- **Structural integrity**: Prevent foundation deterioration
- **Health protection**: Eliminate mold and moisture issues
- **Usable space**: Create valuable living or storage areas
- **Transferable warranty**: Lifetime protection adds resale value

### Smart Investment Timing
The best time to waterproof is **before** you need it. Preventive waterproofing costs 60% less than emergency repairs and provides maximum ROI through avoided damage costs.

### Available Incentives
- **Toronto basement flooding subsidies**: Up to $3,400
- **0% financing options**: Spread costs over 12-60 months
- **Energy efficiency rebates**: Additional savings available
- **Insurance discounts**: Many providers offer premium reductions

**Ready to protect your investment?** Use our calculator above to see your personalized ROI analysis, then contact DrySpace for a free consultation and exact quote.