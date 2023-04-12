let buying = (value, _CFI, _CCCC) => {
  let CFI = _CFI; //Cumulative Fcoin Intake
  //We are gonna take the CFI and the CCCC from the database
  let FAMT = value;
  let CCCC = _CCCC; //Cumulative Creator Coins Circulation
  let OCCS = Math.sqrt((CFI + FAMT) / 0.003); //Overall Creator Coin Supply
  let CCV = OCCS - CCCC; //Creator Coin Value
  CFI += FAMT;
  CCCC += CCV;

  //We are for now returning the amount of creator coins that the user will have
  return [CCV, CFI, CCCC];
};

let selling = (value, _CFI, _CCCC) => {
  let CFI = _CFI;
  let CCAMT = value;
  let CCCC = _CCCC;
  let CCS = CCCC - CCAMT; //Creator Coin Subtraction
  console.log("The total supply now is ", CCS);
  let RFA; //Related Fcoin Amount
  RFA = CCS * CCS * 0.003;
  console.log("The related fcoin amount", RFA);
  let UG; //User Gets
  UG = CFI - RFA;
  CFI -= UG;
  CCCC -= CCAMT;
  console.log(UG);
  return [UG, CFI, CCCC];
};

module.exports = { buying, selling };
