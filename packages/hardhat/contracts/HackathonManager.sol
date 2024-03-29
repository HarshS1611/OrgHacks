// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract HackathonManager is ERC20 {
    // ERC20 token contract
    ERC20 public xhacksToken;

    // Struct for hackathons
    struct Hackathon {
        string name;
        string description;
        uint256 date;
        address[] hackers;
        Sponsor[] sponsors;
    }

    // Struct for sponsors
    struct Sponsor {
        address payable sponsorAddress;
        string name;
        uint256 threshold;
        uint256 lockedAmount;
        uint256 tokenAmount;
        bool isGold;
    }

    mapping(uint256 => Hackathon) public hackathons;
    uint256 public hackathonCount;

    constructor(uint256 initialSupply) ERC20("XHacks", "XHKS") {
        _mint(address(this), initialSupply * 10**18);
        xhacksToken = this;
    }

    // Function to create a new hackathon
    function createHackathon(string memory _name, string memory _description, uint256 _date) public payable {
        require(msg.value == 4 wei, "Stake amount should be 4 ETH");
        Hackathon storage newHackathon = hackathons[hackathonCount];
        newHackathon.name = _name;
        newHackathon.description = _description;
        newHackathon.date = _date;
        newHackathon.hackers.push(msg.sender);
        xhacksToken.transfer(msg.sender, 4 * 10**18);
        hackathonCount++;
    }

    // Function for hackers to join a hackathon
    function joinHackathon(uint256 _hackathonId) public payable {
        require(msg.value == 2 wei, "Stake amount should be 2 ETH");
        Hackathon storage hackathon = hackathons[_hackathonId];
        hackathon.hackers.push(msg.sender);
        xhacksToken.transfer(msg.sender, 2 * 10**18);
    }

    // Function for sponsors to pledge Ether
    function sponsorHackathon(uint256 _hackathonId, string memory _name, uint256 _threshold, bool _isGold) public payable {
        Hackathon storage hackathon = hackathons[_hackathonId];
        Sponsor memory newSponsor = Sponsor({
            sponsorAddress: payable(msg.sender),
            name: _name,
            threshold: _threshold,
            lockedAmount: msg.value,
            tokenAmount: msg.value,
            isGold: _isGold
        });
        hackathon.sponsors.push(newSponsor);
    }

    // Function to release tokens to sponsors if the threshold is met
    function releaseTokensToSponsors(uint256 _hackathonId) public {
        Hackathon storage hackathon = hackathons[_hackathonId];
        for (uint256 i = 0; i < hackathon.sponsors.length; i++) {
            Sponsor storage sponsor = hackathon.sponsors[i];
            if (hackathon.hackers.length >= sponsor.threshold) {
                xhacksToken.transfer(sponsor.sponsorAddress, sponsor.tokenAmount * 10**18);
                sponsor.lockedAmount = 0;
            }
        }
    }

    // Getter functions
    function getHackathonDetails(uint256 _hackathonId) public view returns (string memory, string memory, uint256, uint256) {
        Hackathon storage hackathon = hackathons[_hackathonId];
        return (hackathon.name, hackathon.description, hackathon.date, hackathon.hackers.length);
    }

    function getHackerTokenBalance(address _hacker) public view returns (uint256) {
        return xhacksToken.balanceOf(_hacker);
    }

    function getSponsorDetails(uint256 _hackathonId, uint256 _sponsorIndex) public view returns (string memory, uint256, uint256, uint256, bool) {
        Hackathon storage hackathon = hackathons[_hackathonId];
        Sponsor storage sponsor = hackathon.sponsors[_sponsorIndex];
        return (sponsor.name, sponsor.threshold, sponsor.lockedAmount, sponsor.tokenAmount, sponsor.isGold);
    }
}