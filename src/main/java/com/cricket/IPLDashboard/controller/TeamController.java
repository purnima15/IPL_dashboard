package com.cricket.IPLDashboard.controller;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cricket.IPLDashboard.model.Team;
import com.cricket.IPLDashboard.repository.MatchRepository;
import com.cricket.IPLDashboard.repository.TeamRepository;

@RestController 
public class TeamController {
	
	private TeamRepository teamRepository;
	private MatchRepository matchRepository;
	
	
	public TeamController(TeamRepository temaRepository, MatchRepository matchRepository) {
		super();
		this.teamRepository = temaRepository;
		this.matchRepository=matchRepository;
	}

	@GetMapping("/team/{teamName}")
	public Team getTeam(@PathVariable String teamName) {
		
		Team team=this.teamRepository.findByTeamName(teamName);
		team.setMatches(matchRepository.findLatestMatchesByTeam(teamName,4));
		
		return team;
		
	}

}
