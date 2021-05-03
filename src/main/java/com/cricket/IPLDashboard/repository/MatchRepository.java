package com.cricket.IPLDashboard.repository;

import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;

import com.cricket.IPLDashboard.model.Match;

public interface MatchRepository extends CrudRepository<Match, Long> {

	
	List<Match> findByTeam1OrTeam2OrderByDateDesc(String teamName1,String teamName2,Pageable pagable);
	
	//here the given method name works same as a sql query 
	//select from match where team1=;; or team2='' order by date desc;
	
	//this is to get latest n matches only
	default List<Match> findLatestMatchesByTeam(String teamName ,int count){
		
		return findByTeam1OrTeam2OrderByDateDesc(teamName,teamName,PageRequest.of(0, count));
	}
}
