var TCAT_TO_VATOR = artifacts.require("TCAT_TO_VATOR");

module.exports = function(deployer) {
deployer.deploy(TCAT_TO_VATOR, {from: "0xd938ffd144253d61ae7f26194e84fe9929de7b4b"});
}