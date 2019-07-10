// =============================================================================
// TropicsU Calculus CO2
// =============================================================================


export function reading($step) {
  const $charts = $step.$$('x-coordinate-system');
  $charts[0].setFunctions(x => x*x*x/3 + x*x - 2*x - 3);
  $charts[1].setFunctions(x => x*x + 2*x - 2);
}
