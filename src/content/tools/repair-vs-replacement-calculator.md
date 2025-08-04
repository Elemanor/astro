---
title: "Repair vs Replacement Calculator | Smart Waterproofing Decisions Toronto"
description: "Should you repair or replace your waterproofing system? Our calculator analyzes costs, system condition, and long-term value to help you make the right decision."
date: 2025-01-29
draft: false
type: "tools"
---

# Repair vs Replacement Calculator

Make smart decisions about your waterproofing system. Our comprehensive assessment tool analyzes your current system, costs, and long-term value to recommend the most cost-effective approach.

**Related Services**: Compare options with our [waterproofing cost calculator](/tools/waterproofing-cost-calculator/), explore [foundation repair ROI](/tools/foundation-repair-roi-calculator/), or learn about our [waterproofing services](/services/waterproofing-services/).

<div id="decision-calculator" class="decision-calculator-container">
    <div class="calculator-header">
        <h2>Repair vs Replace Decision Tool</h2>
        <p>Get personalized recommendations based on your system's condition and your goals</p>
        <div class="progress-bar">
            <div class="progress-fill" id="progress-fill"></div>
        </div>
        <span class="progress-text">Step <span id="current-step">1</span> of 6</span>
    </div>

    <form id="decision-form" class="decision-form">
        <!-- Step 1: System Information -->
        <div class="calc-step active" data-step="1">
            <h3>🏠 Current System Information</h3>
            <div class="input-group">
                <label for="system-age">System Age</label>
                <select id="system-age" required>
                    <option value="">Select age range</option>
                    <option value="0-5">0-5 years (Recently installed)</option>
                    <option value="6-10">6-10 years (Good condition)</option>
                    <option value="11-15">11-15 years (Middle-aged)</option>
                    <option value="16-20">16-20 years (Aging system)</option>
                    <option value="20+">20+ years (Old system)</option>
                    <option value="unknown">Unknown/Original to house</option>
                </select>
            </div>

            <div class="input-group">
                <label for="system-type">Current Waterproofing Type</label>
                <select id="system-type" required>
                    <option value="">Select system type</option>
                    <option value="interior">Interior waterproofing only</option>
                    <option value="exterior">Exterior waterproofing system</option>
                    <option value="partial">Partial/patchwork solutions</option>
                    <option value="none">No formal waterproofing</option>
                    <option value="unknown">Unsure what's installed</option>
                </select>
            </div>

            <div class="input-group">
                <label for="warranty-status">Warranty Status</label>
                <select id="warranty-status">
                    <option value="active">Active warranty</option>
                    <option value="expired">Warranty expired</option>
                    <option value="none">No warranty</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>
        </div>

        <!-- Step 2: Current Problems -->
        <div class="calc-step" data-step="2">
            <h3>⚠️ Current Issues Assessment</h3>
            <p>Check all problems you're experiencing:</p>
            
            <div class="checkbox-grid">
                <label class="problem-option severity-high">
                    <input type="checkbox" name="problems" value="active-flooding" data-severity="high">
                    <div class="problem-content">
                        <span class="problem-icon">🌊</span>
                        <strong>Active flooding/standing water</strong>
                        <span class="severity-badge high">Critical</span>
                    </div>
                </label>

                <label class="problem-option severity-high">
                    <input type="checkbox" name="problems" value="structural-damage" data-severity="high">
                    <div class="problem-content">
                        <span class="problem-icon">🏚️</span>
                        <strong>Structural damage/bowing walls</strong>
                        <span class="severity-badge high">Critical</span>
                    </div>
                </label>

                <label class="problem-option severity-medium">
                    <input type="checkbox" name="problems" value="recurring-leaks" data-severity="medium">
                    <div class="problem-content">
                        <span class="problem-icon">💧</span>
                        <strong>Recurring water leaks</strong>
                        <span class="severity-badge medium">Moderate</span>
                    </div>
                </label>

                <label class="problem-option severity-medium">
                    <input type="checkbox" name="problems" value="mold-growth" data-severity="medium">
                    <div class="problem-content">
                        <span class="problem-icon">🦠</span>
                        <strong>Mold/mildew growth</strong>
                        <span class="severity-badge medium">Moderate</span>
                    </div>
                </label>

                <label class="problem-option severity-medium">
                    <input type="checkbox" name="problems" value="multiple-failures" data-severity="medium">
                    <div class="problem-content">
                        <span class="problem-icon">🔧</span>
                        <strong>Multiple system failures</strong>
                        <span class="severity-badge medium">Moderate</span>
                    </div>
                </label>

                <label class="problem-option severity-low">
                    <input type="checkbox" name="problems" value="minor-seepage" data-severity="low">
                    <div class="problem-content">
                        <span class="problem-icon">💦</span>
                        <strong>Minor seepage/dampness</strong>
                        <span class="severity-badge low">Minor</span>
                    </div>
                </label>

                <label class="problem-option severity-low">
                    <input type="checkbox" name="problems" value="preventive" data-severity="low">
                    <div class="problem-content">
                        <span class="problem-icon">🛡️</span>
                        <strong>Preventive (no current issues)</strong>
                        <span class="severity-badge low">Preventive</span>
                    </div>
                </label>
            </div>
        </div>

        <!-- Step 3: Repair History -->
        <div class="calc-step" data-step="3">
            <h3>🔨 Repair History</h3>
            
            <div class="input-group">
                <label for="repair-frequency">How often have you needed repairs?</label>
                <select id="repair-frequency" required>
                    <option value="never">Never needed repairs</option>
                    <option value="once">Once in the past 5 years</option>
                    <option value="occasional">2-3 times in 5 years</option>
                    <option value="frequent">Multiple times per year</option>
                    <option value="constant">Constant ongoing issues</option>
                </select>
            </div>

            <div class="input-group">
                <label for="last-repair-cost">Approximate cost of last major repair</label>
                <select id="last-repair-cost">
                    <option value="0">No previous repairs</option>
                    <option value="500">Under $500</option>
                    <option value="1500">$500 - $2,500</option>
                    <option value="5000">$2,500 - $7,500</option>
                    <option value="10000">$7,500 - $15,000</option>
                    <option value="15000">Over $15,000</option>
                </select>
            </div>

            <div class="input-group">
                <label for="repair-satisfaction">How satisfied were you with previous repairs?</label>
                <select id="repair-satisfaction">
                    <option value="n/a">No previous repairs</option>
                    <option value="very-satisfied">Very satisfied - lasted years</option>
                    <option value="satisfied">Satisfied - some minor issues</option>
                    <option value="neutral">Mixed results</option>
                    <option value="dissatisfied">Dissatisfied - problems returned</option>
                    <option value="very-dissatisfied">Very dissatisfied - wasted money</option>
                </select>
            </div>
        </div>

        <!-- Step 4: Performance Evaluation -->
        <div class="calc-step" data-step="4">
            <h3>📊 System Performance</h3>
            
            <div class="performance-grid">
                <div class="performance-item">
                    <label>Overall system effectiveness</label>
                    <div class="rating-scale">
                        <input type="radio" name="effectiveness" value="1" id="eff1">
                        <label for="eff1">1</label>
                        <input type="radio" name="effectiveness" value="2" id="eff2">
                        <label for="eff2">2</label>
                        <input type="radio" name="effectiveness" value="3" id="eff3">
                        <label for="eff3">3</label>
                        <input type="radio" name="effectiveness" value="4" id="eff4">
                        <label for="eff4">4</label>
                        <input type="radio" name="effectiveness" value="5" id="eff5">
                        <label for="eff5">5</label>
                    </div>
                    <div class="rating-labels">
                        <span>Poor</span>
                        <span>Excellent</span>
                    </div>
                </div>

                <div class="performance-item">
                    <label>Reliability (consistent performance)</label>
                    <div class="rating-scale">
                        <input type="radio" name="reliability" value="1" id="rel1">
                        <label for="rel1">1</label>
                        <input type="radio" name="reliability" value="2" id="rel2">
                        <label for="rel2">2</label>
                        <input type="radio" name="reliability" value="3" id="rel3">
                        <label for="rel3">3</label>
                        <input type="radio" name="reliability" value="4" id="rel4">
                        <label for="rel4">4</label>
                        <input type="radio" name="reliability" value="5" id="rel5">
                        <label for="rel5">5</label>
                    </div>
                    <div class="rating-labels">
                        <span>Unreliable</span>
                        <span>Very Reliable</span>
                    </div>
                </div>

                <div class="performance-item">
                    <label>Peace of mind level</label>
                    <div class="rating-scale">
                        <input type="radio" name="peace-of-mind" value="1" id="pom1">
                        <label for="pom1">1</label>
                        <input type="radio" name="peace-of-mind" value="2" id="pom2">
                        <label for="pom2">2</label>
                        <input type="radio" name="peace-of-mind" value="3" id="pom3">
                        <label for="pom3">3</label>
                        <input type="radio" name="peace-of-mind" value="4" id="pom4">
                        <label for="pom4">4</label>
                        <input type="radio" name="peace-of-mind" value="5" id="pom5">
                        <label for="pom5">5</label>
                    </div>
                    <div class="rating-labels">
                        <span>Constant worry</span>
                        <span>Complete confidence</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Step 5: Future Planning -->
        <div class="calc-step" data-step="5">
            <h3>🎯 Your Goals & Timeline</h3>
            
            <div class="input-group">
                <label for="home-timeline">How long do you plan to stay in this home?</label>
                <select id="home-timeline" required>
                    <option value="1-2">1-2 years (selling soon)</option>
                    <option value="3-5">3-5 years (medium term)</option>
                    <option value="6-10">6-10 years (long term)</option>
                    <option value="forever">10+ years (forever home)</option>
                </select>
            </div>

            <div class="input-group">
                <label for="primary-goal">Primary goal for waterproofing work</label>
                <select id="primary-goal" required>
                    <option value="solve-immediate">Solve immediate problems</option>
                    <option value="prevent-future">Prevent future issues</option>
                    <option value="increase-value">Increase home value</option>
                    <option value="peace-of-mind">Peace of mind</option>
                    <option value="lowest-cost">Lowest upfront cost</option>
                    <option value="best-value">Best long-term value</option>
                </select>
            </div>

            <div class="input-group">
                <label for="budget-preference">Budget approach</label>
                <select id="budget-preference" required>
                    <option value="minimal">Minimal - fix only what's broken</option>
                    <option value="moderate">Moderate - address current + near-term issues</option>
                    <option value="comprehensive">Comprehensive - complete long-term solution</option>
                    <option value="premium">Premium - best possible system</option>
                </select>
            </div>

            <div class="input-group">
                <label for="risk-tolerance">Risk tolerance</label>
                <select id="risk-tolerance" required>
                    <option value="low">Low - want guaranteed solutions</option>
                    <option value="medium">Medium - reasonable risk okay</option>
                    <option value="high">High - willing to take chances for savings</option>
                </select>
            </div>
        </div>

        <!-- Step 6: Cost Comparison -->
        <div class="calc-step" data-step="6">
            <h3>💰 Cost Information</h3>
            
            <div class="input-group">
                <label for="home-value">Current home value (for ROI calculations)</label>
                <div class="input-wrapper">
                    <span class="prefix">$</span>
                    <input type="number" id="home-value" value="800000" min="200000" max="5000000" step="25000">
                </div>
                <small>Toronto average: $1,196,101</small>
            </div>

            <div class="input-group">
                <label for="repair-quote">Repair quote received (if any)</label>
                <div class="input-wrapper">
                    <span class="prefix">$</span>
                    <input type="number" id="repair-quote" min="0" max="50000" step="500" placeholder="0">
                </div>
                <small>Leave blank if no quote received</small>
            </div>

            <div class="input-group">
                <label for="replacement-quote">Replacement/new system quote (if any)</label>
                <div class="input-wrapper">
                    <span class="prefix">$</span>
                    <input type="number" id="replacement-quote" min="0" max="100000" step="1000" placeholder="0">
                </div>
                <small>Leave blank if no quote received</small>
            </div>
        </div>

        <!-- Navigation -->
        <div class="calc-navigation">
            <button type="button" class="calc-btn prev" onclick="previousStep()">← Previous</button>
            <button type="button" class="calc-btn next" onclick="nextStep()">Next →</button>
            <button type="button" class="calc-btn analyze" onclick="analyzeDecision()" style="display:none;">Analyze Options</button>
        </div>
    </form>

    <!-- Results Section -->
    <div id="analysis-results" class="analysis-results" style="display:none;">
        <div class="results-header">
            <h2>🎯 Your Personalized Recommendation</h2>
            <div class="recommendation-badge" id="main-recommendation">
                <!-- Recommendation will be inserted here -->
            </div>
        </div>

        <!-- Decision Matrix -->
        <div class="decision-matrix">
            <h3>📊 Decision Analysis</h3>
            <div class="matrix-grid">
                <div class="matrix-option" id="repair-option">
                    <div class="option-header">
                        <h4>🔧 Repair Current System</h4>
                        <div class="recommendation-score" id="repair-score"></div>
                    </div>
                    <div class="option-content">
                        <div class="pros-cons">
                            <div class="pros">
                                <h5>✅ Advantages</h5>
                                <ul id="repair-pros"></ul>
                            </div>
                            <div class="cons">
                                <h5>❌ Disadvantages</h5>
                                <ul id="repair-cons"></ul>
                            </div>
                        </div>
                        <div class="cost-analysis">
                            <h5>💰 Cost Analysis</h5>
                            <div class="cost-breakdown" id="repair-costs"></div>
                        </div>
                    </div>
                </div>

                <div class="matrix-option" id="replace-option">
                    <div class="option-header">
                        <h4>🆕 Replace System</h4>
                        <div class="recommendation-score" id="replace-score"></div>
                    </div>
                    <div class="option-content">
                        <div class="pros-cons">
                            <div class="pros">
                                <h5>✅ Advantages</h5>
                                <ul id="replace-pros"></ul>
                            </div>
                            <div class="cons">
                                <h5>❌ Disadvantages</h5>
                                <ul id="replace-cons"></ul>
                            </div>
                        </div>
                        <div class="cost-analysis">
                            <h5>💰 Cost Analysis</h5>
                            <div class="cost-breakdown" id="replace-costs"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Cost Comparison Timeline -->
        <div class="cost-timeline">
            <h3>📈 Cost Comparison Over Time</h3>
            <canvas id="cost-timeline-chart" width="800" height="400"></canvas>
            <div class="timeline-legend">
                <div class="legend-item">
                    <span class="legend-color repair"></span>
                    <span>Repair Option</span>
                </div>
                <div class="legend-item">
                    <span class="legend-color replace"></span>
                    <span>Replace Option</span>
                </div>
                <div class="legend-item">
                    <span class="legend-marker breakeven"></span>
                    <span>Break-even Point: <strong id="breakeven-time">Year X</strong></span>
                </div>
            </div>
        </div>

        <!-- Risk Assessment -->
        <div class="risk-assessment">
            <h3>⚠️ Risk Analysis</h3>
            <div class="risk-grid">
                <div class="risk-card" id="repair-risks">
                    <h4>Repair Option Risks</h4>
                    <div class="risk-level" id="repair-risk-level"></div>
                    <ul id="repair-risk-factors"></ul>
                </div>
                <div class="risk-card" id="replace-risks">
                    <h4>Replace Option Risks</h4>
                    <div class="risk-level" id="replace-risk-level"></div>
                    <ul id="replace-risk-factors"></ul>
                </div>
            </div>
        </div>

        <!-- Expert Recommendations -->
        <div class="expert-recommendations">
            <h3>🏆 Expert Recommendations</h3>
            <div class="recommendation-content" id="expert-advice">
                <!-- Expert advice will be populated here -->
            </div>
        </div>

        <!-- Action Plan -->
        <div class="action-plan">
            <h3>📋 Your Next Steps</h3>
            <div class="action-steps" id="action-steps">
                <!-- Action steps will be populated here -->
            </div>
            
            <div class="cta-section">
                <h4>Ready to Move Forward?</h4>
                <p>Get professional assessment and accurate quotes for your specific situation.</p>
                <div class="cta-buttons">
                    <a href="tel:4375450067" class="cta-btn primary">
                        📞 Call (437) 545-0067
                    </a>
                    <button class="cta-btn secondary" onclick="scheduleAssessment()">
                        📋 Schedule Free Assessment
                    </button>
                    <a href="/tools/waterproofing-cost-calculator/" class="cta-btn tertiary">
                        💰 Get Cost Estimates
                    </a>
                </div>
            </div>
        </div>

        <button class="calc-btn recalculate" onclick="resetCalculator()">🔄 Start New Analysis</button>
    </div>
</div>

<style>
.decision-calculator-container {
    max-width: 900px;
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

.progress-bar {
    width: 100%;
    height: 8px;
    background: #e5e7eb;
    border-radius: 4px;
    margin: 1rem 0 0.5rem 0;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #1e40af, #3b82f6);
    border-radius: 4px;
    transition: width 0.3s ease;
    width: 16.67%; /* Start at step 1 of 6 */
}

.progress-text {
    font-size: 0.875rem;
    color: #6b7280;
    font-weight: 600;
}

.calc-step {
    display: none;
    animation: fadeIn 0.3s ease;
    min-height: 400px;
}

.calc-step.active {
    display: block;
}

.calc-step h3 {
    margin-bottom: 1.5rem;
    color: #1a1a1a;
    font-size: 1.5rem;
}

.input-group {
    margin-bottom: 1.5rem;
}

.input-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #4a5568;
}

.input-group select,
.input-group input[type="number"] {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.2s;
}

.input-group select:focus,
.input-group input:focus {
    outline: none;
    border-color: #1e40af;
}

.input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
}

.prefix {
    position: absolute;
    left: 1rem;
    color: #6b7280;
    font-weight: 600;
    z-index: 1;
}

.input-wrapper input {
    padding-left: 2rem;
}

.input-group small {
    display: block;
    margin-top: 0.25rem;
    color: #6b7280;
    font-size: 0.875rem;
}

.checkbox-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
}

.problem-option {
    display: block;
    padding: 1rem;
    background: white;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;
}

.problem-option:hover {
    border-color: #3b82f6;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.problem-option input[type="checkbox"] {
    display: none;
}

.problem-option input[type="checkbox"]:checked + .problem-content {
    color: #1e40af;
}

.problem-option input[type="checkbox"]:checked {
    background: #1e40af;
}

.problem-option.severity-high {
    border-left: 4px solid #ef4444;
}

.problem-option.severity-medium {
    border-left: 4px solid #f59e0b;
}

.problem-option.severity-low {
    border-left: 4px solid #10b981;
}

.problem-content {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
}

.problem-icon {
    font-size: 1.5rem;
}

.problem-content strong {
    flex: 1;
    min-width: 200px;
}

.severity-badge {
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}

.severity-badge.high {
    background: #fecaca;
    color: #dc2626;
}

.severity-badge.medium {
    background: #fed7aa;
    color: #ea580c;
}

.severity-badge.low {
    background: #bbf7d0;
    color: #059669;
}

.performance-grid {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.performance-item {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    border: 2px solid #e5e7eb;
}

.performance-item label {
    display: block;
    margin-bottom: 1rem;
    font-weight: 600;
    color: #1a1a1a;
}

.rating-scale {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 0.5rem;
}

.rating-scale input[type="radio"] {
    display: none;
}

.rating-scale label {
    width: 40px;
    height: 40px;
    border: 2px solid #e5e7eb;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;
    font-weight: 600;
    margin-bottom: 0;
}

.rating-scale input[type="radio"]:checked + label {
    background: #1e40af;
    color: white;
    border-color: #1e40af;
}

.rating-scale label:hover {
    border-color: #3b82f6;
    background: #eff6ff;
}

.rating-labels {
    display: flex;
    justify-content: space-between;
    font-size: 0.875rem;
    color: #6b7280;
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
    font-size: 1rem;
}

.calc-btn.prev {
    background: #e5e7eb;
    color: #4a5568;
}

.calc-btn.next,
.calc-btn.analyze {
    background: #1e40af;
    color: white;
}

.calc-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.calc-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
}

/* Results Styles */
.analysis-results {
    animation: slideIn 0.5s ease;
}

.results-header {
    text-align: center;
    margin-bottom: 2rem;
}

.results-header h2 {
    color: #1e40af;
    margin-bottom: 1rem;
}

.recommendation-badge {
    display: inline-block;
    padding: 1rem 2rem;
    border-radius: 12px;
    font-size: 1.25rem;
    font-weight: 700;
    text-align: center;
}

.recommendation-badge.repair {
    background: linear-gradient(135deg, #f59e0b, #d97706);
    color: white;
}

.recommendation-badge.replace {
    background: linear-gradient(135deg, #059669, #047857);
    color: white;
}

.recommendation-badge.neutral {
    background: linear-gradient(135deg, #6b7280, #4b5563);
    color: white;
}

.decision-matrix {
    margin-bottom: 2rem;
}

.decision-matrix h3 {
    margin-bottom: 1.5rem;
    color: #1a1a1a;
}

.matrix-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2rem;
}

.matrix-option {
    background: white;
    border-radius: 12px;
    padding: 1.5rem;
    border: 2px solid #e5e7eb;
    transition: all 0.2s;
}

.matrix-option.recommended {
    border-color: #059669;
    box-shadow: 0 4px 20px rgba(5, 150, 105, 0.1);
}

.option-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid #f3f4f6;
}

.option-header h4 {
    margin: 0;
    color: #1a1a1a;
}

.recommendation-score {
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: 700;
    font-size: 0.875rem;
}

.recommendation-score.excellent {
    background: #d1fae5;
    color: #065f46;
}

.recommendation-score.good {
    background: #dbeafe;
    color: #1e40af;
}

.recommendation-score.fair {
    background: #fef3c7;
    color: #92400e;
}

.recommendation-score.poor {
    background: #fee2e2;
    color: #dc2626;
}

.pros-cons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.pros h5,
.cons h5 {
    margin-bottom: 0.5rem;
    font-size: 1rem;
}

.pros ul,
.cons ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.pros li,
.cons li {
    font-size: 0.875rem;
    margin-bottom: 0.25rem;
    padding-left: 1rem;
    position: relative;
}

.pros li::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #059669;
    font-weight: bold;
}

.cons li::before {
    content: "×";
    position: absolute;
    left: 0;
    color: #dc2626;
    font-weight: bold;
}

.cost-analysis h5 {
    margin-bottom: 1rem;
    color: #1a1a1a;
}

.cost-breakdown {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.cost-item {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    background: #f9fafb;
    border-radius: 4px;
}

.cost-timeline {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    margin-bottom: 2rem;
}

.cost-timeline h3 {
    margin-bottom: 1.5rem;
    color: #1a1a1a;
}

#cost-timeline-chart {
    max-width: 100%;
    height: auto;
}

.timeline-legend {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 1rem;
    flex-wrap: wrap;
}

.legend-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.legend-color {
    width: 20px;
    height: 4px;
    border-radius: 2px;
}

.legend-color.repair {
    background: #f59e0b;
}

.legend-color.replace {
    background: #059669;
}

.legend-marker.breakeven {
    width: 20px;
    height: 20px;
    border: 2px dashed #dc2626;
    border-radius: 50%;
}

.risk-assessment {
    margin-bottom: 2rem;
}

.risk-assessment h3 {
    margin-bottom: 1.5rem;
    color: #1a1a1a;
}

.risk-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}

.risk-card {
    background: white;
    padding: 1.5rem;
    border-radius: 12px;
    border: 2px solid #e5e7eb;
}

.risk-card h4 {
    margin-bottom: 1rem;
    color: #1a1a1a;
}

.risk-level {
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-weight: 600;
    margin-bottom: 1rem;
    text-align: center;
}

.risk-level.low {
    background: #d1fae5;
    color: #065f46;
}

.risk-level.medium {
    background: #fef3c7;
    color: #92400e;
}

.risk-level.high {
    background: #fee2e2;
    color: #dc2626;
}

.expert-recommendations {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    margin-bottom: 2rem;
}

.expert-recommendations h3 {
    margin-bottom: 1.5rem;
    color: #1a1a1a;
}

.recommendation-content {
    background: #f8fafc;
    padding: 1.5rem;
    border-radius: 8px;
    border-left: 4px solid #1e40af;
}

.action-plan {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    margin-bottom: 2rem;
}

.action-plan h3 {
    margin-bottom: 1.5rem;
    color: #1a1a1a;
}

.action-steps {
    margin-bottom: 2rem;
}

.action-step {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1rem;
    padding: 1rem;
    background: #f8fafc;
    border-radius: 8px;
}

.step-number {
    background: #1e40af;
    color: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    flex-shrink: 0;
}

.step-content h5 {
    margin-bottom: 0.5rem;
    color: #1a1a1a;
}

.step-content p {
    margin: 0;
    color: #6b7280;
}

.cta-section {
    text-align: center;
    padding: 2rem;
    background: #f3f4f6;
    border-radius: 8px;
}

.cta-section h4 {
    margin-bottom: 1rem;
    color: #1a1a1a;
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
    background: white;
    color: #1e40af;
    border: 2px solid #1e40af;
}

.cta-btn.tertiary {
    background: #f3f4f6;
    color: #4a5568;
    border: 2px solid #e5e7eb;
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

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes slideIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
    .decision-calculator-container {
        padding: 1rem;
    }
    
    .checkbox-grid {
        grid-template-columns: 1fr;
    }
    
    .matrix-grid {
        grid-template-columns: 1fr;
    }
    
    .pros-cons {
        grid-template-columns: 1fr;
    }
    
    .risk-grid {
        grid-template-columns: 1fr;
    }
    
    .timeline-legend {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
    
    .cta-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    .rating-scale {
        gap: 0.5rem;
    }
    
    .rating-scale label {
        width: 35px;
        height: 35px;
    }
}
</style>

<script>
let currentStep = 1;
const totalSteps = 6;
let analysisData = {};

// Update progress bar
function updateProgress() {
    const progress = (currentStep / totalSteps) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    document.getElementById('current-step').textContent = currentStep;
}

function showStep(step) {
    document.querySelectorAll('.calc-step').forEach(s => s.classList.remove('active'));
    document.querySelector(`[data-step="${step}"]`).classList.add('active');
    
    // Update navigation buttons
    document.querySelector('.prev').style.display = step === 1 ? 'none' : 'inline-block';
    document.querySelector('.next').style.display = step === totalSteps ? 'none' : 'inline-block';
    document.querySelector('.analyze').style.display = step === totalSteps ? 'inline-block' : 'none';
    
    updateProgress();
}

function nextStep() {
    if (validateCurrentStep() && currentStep < totalSteps) {
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

function validateCurrentStep() {
    const step = document.querySelector(`[data-step="${currentStep}"]`);
    const requiredFields = step.querySelectorAll('[required]');
    
    for (let field of requiredFields) {
        if (!field.value) {
            field.focus();
            field.style.borderColor = '#ef4444';
            setTimeout(() => {
                field.style.borderColor = '#e5e7eb';
            }, 2000);
            return false;
        }
    }
    return true;
}

function collectFormData() {
    return {
        systemAge: document.getElementById('system-age').value,
        systemType: document.getElementById('system-type').value,
        warrantyStatus: document.getElementById('warranty-status').value,
        problems: Array.from(document.querySelectorAll('input[name="problems"]:checked')).map(cb => ({
            value: cb.value,
            severity: cb.dataset.severity
        })),
        repairFrequency: document.getElementById('repair-frequency').value,
        lastRepairCost: parseFloat(document.getElementById('last-repair-cost').value) || 0,
        repairSatisfaction: document.getElementById('repair-satisfaction').value,
        effectiveness: document.querySelector('input[name="effectiveness"]:checked')?.value,
        reliability: document.querySelector('input[name="reliability"]:checked')?.value,
        peaceOfMind: document.querySelector('input[name="peace-of-mind"]:checked')?.value,
        homeTimeline: document.getElementById('home-timeline').value,
        primaryGoal: document.getElementById('primary-goal').value,
        budgetPreference: document.getElementById('budget-preference').value,
        riskTolerance: document.getElementById('risk-tolerance').value,
        homeValue: parseFloat(document.getElementById('home-value').value),
        repairQuote: parseFloat(document.getElementById('repair-quote').value) || 0,
        replacementQuote: parseFloat(document.getElementById('replacement-quote').value) || 0
    };
}

function calculateScores(data) {
    let repairScore = 50; // Base score
    let replaceScore = 50; // Base score
    
    // System age impact
    switch(data.systemAge) {
        case '0-5': repairScore += 20; replaceScore -= 10; break;
        case '6-10': repairScore += 10; replaceScore -= 5; break;
        case '11-15': repairScore += 0; replaceScore += 5; break;
        case '16-20': repairScore -= 15; replaceScore += 15; break;
        case '20+': repairScore -= 25; replaceScore += 25; break;
        case 'unknown': repairScore -= 10; replaceScore += 10; break;
    }
    
    // Problem severity impact
    const hasCritical = data.problems.some(p => p.severity === 'high');
    const hasMultiple = data.problems.length > 2;
    
    if (hasCritical) {
        repairScore -= 20;
        replaceScore += 20;
    }
    
    if (hasMultiple) {
        repairScore -= 10;
        replaceScore += 15;
    }
    
    if (data.problems.some(p => p.value === 'preventive')) {
        repairScore += 15;
        replaceScore -= 5;
    }
    
    // Repair history impact
    switch(data.repairFrequency) {
        case 'never': repairScore += 10; break;
        case 'once': repairScore += 5; break;
        case 'occasional': repairScore -= 10; replaceScore += 15; break;
        case 'frequent': repairScore -= 20; replaceScore += 25; break;
        case 'constant': repairScore -= 30; replaceScore += 30; break;
    }
    
    // Satisfaction with previous repairs
    switch(data.repairSatisfaction) {
        case 'very-satisfied': repairScore += 15; break;
        case 'satisfied': repairScore += 5; break;
        case 'neutral': break;
        case 'dissatisfied': repairScore -= 15; replaceScore += 10; break;
        case 'very-dissatisfied': repairScore -= 25; replaceScore += 20; break;
    }
    
    // Performance ratings
    const avgPerformance = (parseFloat(data.effectiveness) + parseFloat(data.reliability) + parseFloat(data.peaceOfMind)) / 3;
    if (avgPerformance >= 4) {
        repairScore += 10;
        replaceScore -= 5;
    } else if (avgPerformance <= 2) {
        repairScore -= 15;
        replaceScore += 15;
    }
    
    // Timeline and goals
    switch(data.homeTimeline) {
        case '1-2': repairScore += 15; replaceScore -= 10; break;
        case '3-5': repairScore += 5; break;
        case '6-10': repairScore -= 5; replaceScore += 10; break;
        case 'forever': repairScore -= 10; replaceScore += 20; break;
    }
    
    switch(data.primaryGoal) {
        case 'solve-immediate': repairScore += 10; break;
        case 'prevent-future': replaceScore += 15; break;
        case 'increase-value': replaceScore += 10; break;
        case 'peace-of-mind': replaceScore += 15; break;
        case 'lowest-cost': repairScore += 20; replaceScore -= 10; break;
        case 'best-value': replaceScore += 10; break;
    }
    
    // Budget preference
    switch(data.budgetPreference) {
        case 'minimal': repairScore += 20; replaceScore -= 15; break;
        case 'moderate': repairScore += 5; break;
        case 'comprehensive': replaceScore += 15; break;
        case 'premium': replaceScore += 20; break;
    }
    
    // Risk tolerance
    switch(data.riskTolerance) {
        case 'low': replaceScore += 15; repairScore -= 5; break;
        case 'medium': break;
        case 'high': repairScore += 10; replaceScore -= 5; break;
    }
    
    // Cap scores between 0-100
    repairScore = Math.max(0, Math.min(100, repairScore));
    replaceScore = Math.max(0, Math.min(100, replaceScore));
    
    return { repairScore, replaceScore };
}

function generateCostEstimates(data) {
    // Base estimates if no quotes provided
    let repairCost = data.repairQuote || estimateRepairCost(data);
    let replaceCost = data.replacementQuote || estimateReplacementCost(data);
    
    // Calculate ongoing costs
    const yearsToProject = data.homeTimeline === '1-2' ? 2 : 
                          data.homeTimeline === '3-5' ? 5 :
                          data.homeTimeline === '6-10' ? 10 : 15;
    
    // Repair option ongoing costs
    let repairOngoingAnnual = 0;
    switch(data.repairFrequency) {
        case 'frequent': repairOngoingAnnual = 1000; break;
        case 'occasional': repairOngoingAnnual = 500; break;
        case 'once': repairOngoingAnnual = 200; break;
        default: repairOngoingAnnual = 100; break;
    }
    
    // Add system age factor
    if (data.systemAge === '20+') repairOngoingAnnual *= 1.5;
    else if (data.systemAge === '16-20') repairOngoingAnnual *= 1.2;
    
    // Replacement option minimal ongoing costs
    const replaceOngoingAnnual = 50; // Minimal maintenance with warranty
    
    const repairTotal = repairCost + (repairOngoingAnnual * yearsToProject);
    const replaceTotal = replaceCost + (replaceOngoingAnnual * yearsToProject);
    
    return {
        repair: {
            initial: repairCost,
            annual: repairOngoingAnnual,
            total: repairTotal
        },
        replace: {
            initial: replaceCost,
            annual: replaceOngoingAnnual,
            total: replaceTotal
        },
        breakeven: replaceCost > repairCost ? Math.ceil((replaceCost - repairCost) / Math.max(1, repairOngoingAnnual - replaceOngoingAnnual)) : 0
    };
}

function estimateRepairCost(data) {
    let baseCost = 3000; // Base repair cost
    
    // Adjust based on problems
    const criticalProblems = data.problems.filter(p => p.severity === 'high').length;
    const moderateProblems = data.problems.filter(p => p.severity === 'medium').length;
    
    baseCost += criticalProblems * 2000;
    baseCost += moderateProblems * 1000;
    
    // System age factor
    if (data.systemAge === '20+') baseCost *= 1.5;
    else if (data.systemAge === '16-20') baseCost *= 1.2;
    
    return Math.round(baseCost);
}

function estimateReplacementCost(data) {
    let baseCost = 15000; // Base replacement cost
    
    // Adjust based on system type and complexity
    const hasCritical = data.problems.some(p => p.severity === 'high');
    if (hasCritical) baseCost *= 1.3;
    
    // Budget preference adjustment
    switch(data.budgetPreference) {
        case 'minimal': baseCost *= 0.8; break;
        case 'premium': baseCost *= 1.4; break;
        case 'comprehensive': baseCost *= 1.2; break;
    }
    
    return Math.round(baseCost);
}

function analyzeDecision() {
    if (!validateCurrentStep()) return;
    
    const data = collectFormData();
    const scores = calculateScores(data);
    const costs = generateCostEstimates(data);
    
    analysisData = { data, scores, costs };
    
    displayResults();
    
    // Show results
    document.getElementById('decision-form').style.display = 'none';
    document.getElementById('analysis-results').style.display = 'block';
    document.getElementById('analysis-results').scrollIntoView({ behavior: 'smooth' });
}

function displayResults() {
    const { data, scores, costs } = analysisData;
    
    // Main recommendation
    const mainRecommendation = document.getElementById('main-recommendation');
    if (scores.replaceScore > scores.repairScore + 10) {
        mainRecommendation.className = 'recommendation-badge replace';
        mainRecommendation.innerHTML = '🆕 Recommended: Replace System';
    } else if (scores.repairScore > scores.replaceScore + 10) {
        mainRecommendation.className = 'recommendation-badge repair';
        mainRecommendation.innerHTML = '🔧 Recommended: Repair Current System';
    } else {
        mainRecommendation.className = 'recommendation-badge neutral';
        mainRecommendation.innerHTML = '⚖️ Both Options Have Merit';
    }
    
    // Score displays
    document.getElementById('repair-score').className = `recommendation-score ${getScoreClass(scores.repairScore)}`;
    document.getElementById('repair-score').textContent = `${scores.repairScore}/100`;
    
    document.getElementById('replace-score').className = `recommendation-score ${getScoreClass(scores.replaceScore)}`;
    document.getElementById('replace-score').textContent = `${scores.replaceScore}/100`;
    
    // Highlight recommended option
    if (scores.replaceScore > scores.repairScore + 10) {
        document.getElementById('replace-option').classList.add('recommended');
    } else if (scores.repairScore > scores.replaceScore + 10) {
        document.getElementById('repair-option').classList.add('recommended');
    }
    
    // Populate pros and cons
    populateRepairProscons(data, scores);
    populateReplaceProscons(data, scores);
    
    // Cost analysis
    displayCostAnalysis(costs);
    
    // Draw timeline chart
    drawCostTimeline(costs);
    
    // Risk assessment
    displayRiskAssessment(data, scores);
    
    // Expert recommendations
    displayExpertRecommendations(data, scores, costs);
    
    // Action plan
    displayActionPlan(data, scores);
}

function getScoreClass(score) {
    if (score >= 80) return 'excellent';
    if (score >= 65) return 'good';
    if (score >= 40) return 'fair';
    return 'poor';
}

function populateRepairProscons(data, scores) {
    const pros = [];
    const cons = [];
    
    // Pros
    pros.push('Lower upfront cost');
    if (data.homeTimeline === '1-2') pros.push('Suitable for short-term ownership');
    if (data.systemAge === '0-5' || data.systemAge === '6-10') pros.push('System is relatively young');
    if (data.repairSatisfaction === 'very-satisfied' || data.repairSatisfaction === 'satisfied') {
        pros.push('Previous repairs were successful');
    }
    pros.push('Faster implementation');
    if (data.warrantyStatus === 'active') pros.push('May still be under warranty');
    
    // Cons
    if (data.problems.some(p => p.severity === 'high')) cons.push('May not address critical issues fully');
    if (data.repairFrequency === 'frequent' || data.repairFrequency === 'constant') {
        cons.push('History of recurring problems');
    }
    if (data.systemAge === '20+' || data.systemAge === '16-20') cons.push('System is aging');
    cons.push('Potential for future repairs');
    if (data.homeTimeline === 'forever') cons.push('May not be ideal for long-term ownership');
    cons.push('Limited warranty coverage');
    
    document.getElementById('repair-pros').innerHTML = pros.map(pro => `<li>${pro}</li>`).join('');
    document.getElementById('repair-cons').innerHTML = cons.map(con => `<li>${con}</li>`).join('');
}

function populateReplaceProscons(data, scores) {
    const pros = [];
    const cons = [];
    
    // Pros
    pros.push('Complete long-term solution');
    pros.push('Comprehensive warranty coverage');
    pros.push('Latest technology and methods');
    pros.push('Addresses all current and potential issues');
    if (data.homeTimeline === 'forever' || data.homeTimeline === '6-10') {
        pros.push('Excellent for long-term ownership');
    }
    pros.push('Increases home value');
    pros.push('Peace of mind');
    
    // Cons
    cons.push('Higher upfront investment');
    cons.push('Longer installation timeline');
    if (data.homeTimeline === '1-2') cons.push('May be overkill for short-term ownership');
    cons.push('More disruptive installation process');
    if (data.systemAge === '0-5') cons.push('Replacing relatively new system');
    
    document.getElementById('replace-pros').innerHTML = pros.map(pro => `<li>${pro}</li>`).join('');
    document.getElementById('replace-cons').innerHTML = cons.map(con => `<li>${con}</li>`).join('');
}

function displayCostAnalysis(costs) {
    // Repair costs
    const repairCosts = document.getElementById('repair-costs');
    repairCosts.innerHTML = `
        <div class="cost-item">
            <span>Initial Cost:</span>
            <span>$${costs.repair.initial.toLocaleString()}</span>
        </div>
        <div class="cost-item">
            <span>Est. Annual Maintenance:</span>
            <span>$${costs.repair.annual.toLocaleString()}</span>
        </div>
        <div class="cost-item">
            <span><strong>5-Year Total:</strong></span>
            <span><strong>$${(costs.repair.initial + costs.repair.annual * 5).toLocaleString()}</strong></span>
        </div>
    `;
    
    // Replace costs
    const replaceCosts = document.getElementById('replace-costs');
    replaceCosts.innerHTML = `
        <div class="cost-item">
            <span>Initial Cost:</span>
            <span>$${costs.replace.initial.toLocaleString()}</span>
        </div>
        <div class="cost-item">
            <span>Est. Annual Maintenance:</span>
            <span>$${costs.replace.annual.toLocaleString()}</span>
        </div>
        <div class="cost-item">
            <span><strong>5-Year Total:</strong></span>
            <span><strong>$${(costs.replace.initial + costs.replace.annual * 5).toLocaleString()}</strong></span>
        </div>
    `;
}

function drawCostTimeline(costs) {
    const canvas = document.getElementById('cost-timeline-chart');
    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const padding = 60;
    const chartWidth = canvas.width - 2 * padding;
    const chartHeight = canvas.height - 2 * padding;
    const years = 10;
    
    // Calculate cumulative costs
    const repairCosts = [];
    const replaceCosts = [];
    
    for (let year = 0; year <= years; year++) {
        repairCosts.push(costs.repair.initial + (costs.repair.annual * year));
        replaceCosts.push(costs.replace.initial + (costs.replace.annual * year));
    }
    
    const maxCost = Math.max(...repairCosts, ...replaceCosts);
    const xStep = chartWidth / years;
    const yScale = chartHeight / maxCost;
    
    // Draw axes
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, canvas.height - padding);
    ctx.lineTo(canvas.width - padding, canvas.height - padding);
    ctx.stroke();
    
    // Draw grid lines
    ctx.strokeStyle = '#f3f4f6';
    ctx.lineWidth = 1;
    for (let i = 1; i <= years; i++) {
        const x = padding + (i * xStep);
        ctx.beginPath();
        ctx.moveTo(x, padding);
        ctx.lineTo(x, canvas.height - padding);
        ctx.stroke();
    }
    
    // Draw repair cost line
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(padding, canvas.height - padding - (repairCosts[0] * yScale));
    for (let i = 1; i <= years; i++) {
        const x = padding + (i * xStep);
        const y = canvas.height - padding - (repairCosts[i] * yScale);
        ctx.lineTo(x, y);
    }
    ctx.stroke();
    
    // Draw replace cost line
    ctx.strokeStyle = '#059669';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(padding, canvas.height - padding - (replaceCosts[0] * yScale));
    for (let i = 1; i <= years; i++) {
        const x = padding + (i * xStep);
        const y = canvas.height - padding - (replaceCosts[i] * yScale);
        ctx.lineTo(x, y);
    }
    ctx.stroke();
    
    // Mark break-even point if exists
    if (costs.breakeven > 0 && costs.breakeven <= years) {
        const breakevenX = padding + (costs.breakeven * xStep);
        ctx.strokeStyle = '#dc2626';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(breakevenX, padding);
        ctx.lineTo(breakevenX, canvas.height - padding);
        ctx.stroke();
        ctx.setLineDash([]);
        
        // Draw circle at intersection
        const breakevenCost = costs.repair.initial + (costs.repair.annual * costs.breakeven);
        const breakevenY = canvas.height - padding - (breakevenCost * yScale);
        ctx.beginPath();
        ctx.arc(breakevenX, breakevenY, 8, 0, 2 * Math.PI);
        ctx.fillStyle = '#dc2626';
        ctx.fill();
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;
        ctx.stroke();
    }
    
    // Labels
    ctx.fillStyle = '#1a1a1a';
    ctx.font = '14px sans-serif';
    ctx.textAlign = 'center';
    for (let i = 0; i <= years; i += 2) {
        const x = padding + (i * xStep);
        ctx.fillText(`Year ${i}`, x, canvas.height - padding + 20);
    }
    
    // Update break-even display
    document.getElementById('breakeven-time').textContent = 
        costs.breakeven > 0 ? `Year ${costs.breakeven}` : 'N/A (Replace always costs more)';
}

function displayRiskAssessment(data, scores) {
    // Repair risks
    const repairRisks = [];
    let repairRiskLevel = 'low';
    
    if (data.problems.some(p => p.severity === 'high')) {
        repairRisks.push('Critical issues may not be fully resolved');
        repairRiskLevel = 'high';
    }
    
    if (data.repairFrequency === 'frequent' || data.repairFrequency === 'constant') {
        repairRisks.push('History of recurring failures');
        repairRiskLevel = 'high';
    }
    
    if (data.systemAge === '20+') {
        repairRisks.push('System may fail again due to age');
        repairRiskLevel = repairRiskLevel === 'high' ? 'high' : 'medium';
    }
    
    repairRisks.push('Limited warranty coverage');
    repairRisks.push('May need additional repairs in 2-5 years');
    
    // Replace risks
    const replaceRisks = [];
    let replaceRiskLevel = 'low';
    
    replaceRisks.push('Higher upfront investment');
    replaceRisks.push('Longer construction timeline');
    
    if (data.homeTimeline === '1-2') {
        replaceRisks.push('May not recoup investment if selling soon');
        replaceRiskLevel = 'medium';
    }
    
    replaceRisks.push('Disruption during installation');
    
    // Display risk levels
    document.getElementById('repair-risk-level').className = `risk-level ${repairRiskLevel}`;
    document.getElementById('repair-risk-level').textContent = `${repairRiskLevel.toUpperCase()} RISK`;
    
    document.getElementById('replace-risk-level').className = `risk-level ${replaceRiskLevel}`;
    document.getElementById('replace-risk-level').textContent = `${replaceRiskLevel.toUpperCase()} RISK`;
    
    // Display risk factors
    document.getElementById('repair-risk-factors').innerHTML = 
        repairRisks.map(risk => `<li>${risk}</li>`).join('');
    
    document.getElementById('replace-risk-factors').innerHTML = 
        replaceRisks.map(risk => `<li>${risk}</li>`).join('');
}

function displayExpertRecommendations(data, scores, costs) {
    let recommendation = '';
    
    if (scores.replaceScore > scores.repairScore + 15) {
        recommendation = `
            <p><strong>Strong Recommendation: Replace System</strong></p>
            <p>Based on your assessment, replacement offers the best long-term value. Your system shows ${data.problems.some(p => p.severity === 'high') ? 'critical issues' : 'multiple problems'} that indicate fundamental failures.</p>
            <p>Key factors supporting replacement:</p>
            <ul>
                ${data.homeTimeline === 'forever' ? '<li>Long-term homeownership makes replacement cost-effective</li>' : ''}
                ${data.problems.length > 2 ? '<li>Multiple issues suggest system-wide problems</li>' : ''}
                ${data.repairFrequency === 'frequent' ? '<li>History of recurring repairs indicates ongoing issues</li>' : ''}
            </ul>
        `;
    } else if (scores.repairScore > scores.replaceScore + 15) {
        recommendation = `
            <p><strong>Strong Recommendation: Repair Current System</strong></p>
            <p>Your current system has good potential for successful repairs. The issues appear manageable and repair is the most cost-effective approach for your situation.</p>
            <p>Key factors supporting repair:</p>
            <ul>
                ${data.homeTimeline === '1-2' ? '<li>Short-term ownership makes repair more economical</li>' : ''}
                ${data.systemAge === '0-5' || data.systemAge === '6-10' ? '<li>System is relatively young</li>' : ''}
                ${data.primaryGoal === 'lowest-cost' ? '<li>Aligns with your budget goals</li>' : ''}
            </ul>
        `;
    } else {
        recommendation = `
            <p><strong>Both Options Are Viable</strong></p>
            <p>Your situation presents a balanced case where both repair and replacement have merit. Consider these deciding factors:</p>
            <ul>
                <li><strong>Choose Repair if:</strong> Budget is primary concern, selling within 2-3 years, or system is under 10 years old</li>
                <li><strong>Choose Replacement if:</strong> Long-term home, want maximum reliability, or have experienced multiple failures</li>
            </ul>
            <p>We recommend getting quotes for both options to make a final decision.</p>
        `;
    }
    
    if (costs.breakeven > 0 && costs.breakeven <= 5) {
        recommendation += `<p><strong>Cost Analysis:</strong> Replacement breaks even after ${costs.breakeven} years, making it cost-effective for longer ownership.</p>`;
    }
    
    document.getElementById('expert-advice').innerHTML = recommendation;
}

function displayActionPlan(data, scores) {
    const steps = [];
    const isRecommendedReplace = scores.replaceScore > scores.repairScore + 10;
    
    if (isRecommendedReplace) {
        steps.push({
            title: 'Get Professional Assessment',
            description: 'Schedule a comprehensive evaluation to confirm replacement is needed and identify optimal system design.'
        });
        steps.push({
            title: 'Obtain Multiple Quotes',
            description: 'Get detailed quotes from 2-3 qualified contractors specializing in complete waterproofing systems.'
        });
        steps.push({
            title: 'Review Warranty Options',
            description: 'Compare warranty coverage - lifetime warranties provide the best long-term protection.'
        });
        steps.push({
            title: 'Plan Installation Timeline',
            description: 'Schedule work during ideal weather conditions and plan for temporary disruption.'
        });
    } else {
        steps.push({
            title: 'Identify Specific Issues',
            description: 'Get professional diagnosis to pinpoint exactly what needs repair and why problems occurred.'
        });
        steps.push({
            title: 'Get Repair Quotes',
            description: 'Obtain detailed quotes that address root causes, not just symptoms.'
        });
        if (data.repairFrequency === 'frequent') {
            steps.push({
                title: 'Address Underlying Causes',
                description: 'Ensure repairs address why problems keep recurring - consider drainage improvements.'
            });
        }
        steps.push({
            title: 'Plan Future Monitoring',
            description: 'Establish regular inspection schedule to catch issues early and maintain system.'
        });
    }
    
    const actionStepsHTML = steps.map((step, index) => `
        <div class="action-step">
            <div class="step-number">${index + 1}</div>
            <div class="step-content">
                <h5>${step.title}</h5>
                <p>${step.description}</p>
            </div>
        </div>
    `).join('');
    
    document.getElementById('action-steps').innerHTML = actionStepsHTML;
}

function resetCalculator() {
    currentStep = 1;
    showStep(1);
    document.getElementById('decision-form').style.display = 'block';
    document.getElementById('analysis-results').style.display = 'none';
    
    // Reset form
    document.getElementById('decision-form').reset();
    
    // Clear previous results
    document.getElementById('repair-option').classList.remove('recommended');
    document.getElementById('replace-option').classList.remove('recommended');
    
    // Scroll to top
    document.getElementById('decision-calculator').scrollIntoView({ behavior: 'smooth' });
}

function scheduleAssessment() {
    // This would integrate with scheduling system
    window.location.href = '/contact#assessment-form';
}

// Initialize
showStep(1);
</script>