package com.cricket.IPLDashboard.repository;

import org.springframework.data.repository.CrudRepository;

import com.cricket.IPLDashboard.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long> {
	
	Team findByTeamName(String teamName);
}
