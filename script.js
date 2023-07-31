function final() {
    let filePath1 = "all_seasons.csv";
    let filePath2 = "merged_salaries.csv";
    let filePath3 = "Historical NBA Performance.csv"
    let filePath4 = "NBA_Demographics.csv"
    let filePath5 = "df_filtered.csv"
    let filePath6 = "draft-data-20-years.csv"
    let filePath7 = "teamdata.csv"

    preproc(filePath1, filePath2, filePath3, filePath4, filePath5, filePath6,filePath7); // Preprocess data
}

let preproc = function (filePath1, filePath2, filePath3, filePath4, filePath5, filePath6,filePath7) {
    const teamAbbreviations = {
        "Celtics": "BOS",
        "Nets": "BKN",
        "Knicks": "NYK",
        "76ers": "PHI",
        "Raptors": "TOR",
        "Bulls": "CHI",
        "Cavaliers": "CLE",
        "Pistons": "DET",
        "Pacers": "IND",
        "Bucks": "MIL",
        "Hawks": "ATL",
        "Hornets": "CHA",
        "Heat": "MIA",
        "Magic": "ORL",
        "Wizards": "WAS",
        "Nuggets": "DEN",
        "Timberwolves": "MIN",
        "Thunder": "OKC",
        "Trail Blazers": "POR",
        "Jazz": "UTA",
        "Warriors": "GSW",
        "Clippers": "LAC",
        "Lakers": "LAL",
        "Suns": "PHX",
        "Kings": "SAC",
        "Grizzlies": "MEM",
        "Mavericks": "DAL",
        "Rockets": "HOU",
        "Pelicans": "NOP",
        "Spurs": "SAS"
    };


    const rowConverter1 = function (d) {
        const startYear1 = parseInt(d["season"].split("-")[0]) - 1;
        const finishYear = startYear1 + 1;

        return {
            player_name: d["player_name"],
            team_abbreviation: d["team_abbreviation"],
            age: parseFloat(d["age"]),
            player_height: parseFloat(d["player_height"]),
            player_weight: parseFloat(d["player_weight"]),
            college: d["college"],
            country: d["country"],
            draft_year: parseInt(d["draft_year"]),
            draft_round: parseInt(d["draft_round"]),
            draft_number: parseInt(d["draft_number"]),
            gp: parseFloat(d["gp"]),    
            pts: parseFloat(d["pts"]),
            reb: parseFloat(d["reb"]),
            ast: parseFloat(d["ast"]),
            net_rating: parseFloat(d["net_rating"]),
            oreb_pct: parseFloat(d["oreb_pct"]),
            dreb_pct: parseFloat(d["dreb_pct"]),
            usg_pct: parseFloat(d["usg_pct"]),
            ts_pct: parseFloat(d["ts_pct"]),
            ast_pct: parseFloat(d["ast_pct"]),
            start_year: new Date(startYear1, 0, 1),
            finish_year: new Date(finishYear, 0, 1),
            season: d["season"],
            player_id: d["player_id"]
        };
    };

    const rowConverter2 = function (d) {
        const startYear1 = parseInt(d["season_start"].split("-")[0]);
        const finishYear = parseInt(d["season_end"].split("-")[0]);

        return {
            player_name: d["name"],
            team_abbreviation: d["team"],
            age: parseFloat(d["age"]),
            player_height: parseFloat(d["height"]),
            player_weight: parseFloat(d["weight"]),
            college: d["college"],
            country: d["birthPlace"],
            draft_year: parseInt(d["draft_year"]),
            draft_round: parseInt(d["draft_round"]),
            draft_number: parseInt(d["draft_pick"]),
            gp: parseFloat(d["career_G"]),
            pts: parseFloat(d["career_PTS"]),
            reb: parseFloat(d["career_TRB"]),
            ast: parseFloat(d["career_AST"]),
            net_rating: parseFloat(d["career_WS"]),
            oreb_pct: parseFloat(d["oreb_pct"]),
            dreb_pct: parseFloat(d["dreb_pct"]),
            usg_pct: parseFloat(d["usg_pct"]),
            ts_pct: parseFloat(d["ts_pct"]),
            ast_pct: parseFloat(d["ast_pct"]),
            start_year: new Date(startYear1, 0, 1),
            finish_year: new Date(finishYear, 0, 1),
            season: d["season"],
            player_id: d["player_id"],
            salary: +d['salary']
        };
    };
    const rowConverter3 = function (d) {
        const startYear2 = parseInt(d["Year"].split("-")[0]) - 1;
        return {
            year: new Date(startYear2,0,1),
            team: teamAbbreviations[d["Team"]],
            wins : parseInt(d['Record'].split("-")[0]),
            win_percentage: d["Winning Percentage"],
            season : d['Year']
        };
    };

    const rowConverter4 = function (d) {
        return {
            player_name: d['Player'],
            city : d['City'],
            region: d['Region']
        };
    };

    const rowConverter5 = function (d) {
        return {
            player_name: d['player_name'],
            team_abbreviation: d['team_abbreviation'],
            age: d['age'],
            player_height: d['player_height'],
            player_weight: d['player_weight'],
            college: d['college'],
            country: d['country'],
            draft_year: d['draft_year'],
            draft_round: d['draft_round'],
            draft_number: d['draft_number'],
            gp: d['gp'],
            pts: d['pts'],
            reb: d['reb'],
            ast: d['ast'],
            net_rating: d['net_rating'],
            oreb_pct: d['oreb_pct'],
            dreb_pct: d['dreb_pct'],
            usg_pct: d['usg_pct'],
            ts_pct: d['ts_pct'],
            ast_pct: d['ast_pct'],
            season: d['season']
        };
    };

    const rowConverter6 = function (d) {
        return {
            player_name: d['Player'],
            games_played: parseInt(d['G']),
            total_minutes: parseInt(d['TOTMP']),
            total_points: parseInt(d['TOTPTS']),
            total_rebounds: parseInt(d['TOTTRB']),
            total_assists: parseInt(d['TOTAST']),
            field_goal_percentage: parseFloat(d['FG%']),
            three_point_percentage: parseFloat(d['3P%']),
            free_throw_percentage: parseFloat(d['FT%']),
            win_shares: parseFloat(d['WS']),
            win_shares_per_48: parseFloat(d['WS/48']),
            box_plus_minus: parseFloat(d['BPM']),
            value_over_replacement_player: parseFloat(d['VORP']),
            draft_year: parseInt(d['DraftYr']),
            minutes_per_game: parseFloat(d['MPG']),
            points_per_game: parseFloat(d['PPG']),
            rebounds_per_game: parseFloat(d['RPG']),
            assists_per_game: parseFloat(d['APG'])
        };
    };

    const rowConverter7 = function (d) {


        return {
            Rk: parseInt(d["Rk"]),
            Team: d["Team"],
            Conf: d["Conf"],
            Div: d["Div"],
            W: parseInt(d["W"]),
            L: parseInt(d["L"]),
            W_L_Percentage: parseFloat(d["W/L%"]),
            MOV: parseFloat(d["MOV"]),
            ORtg: parseFloat(d["ORtg"]),
            DRtg: parseFloat(d["DRtg"]),
            NRtg: parseFloat(d["NRtg"]),
            MOV_A: parseFloat(d["MOV/A"]),
            ORtg_A: parseFloat(d["ORtg/A"]),
            DRtg_A: parseFloat(d["DRtg/A"]),
            NRtg_A: parseFloat(d["NRtg/A"]),
        };
    };


    // Preprocess 
    Promise.all([
        d3.csv(filePath1, rowConverter1),
        d3.csv(filePath2, rowConverter2),
        d3.csv(filePath3, rowConverter3),
        d3.csv(filePath4, rowConverter4),
        d3.csv(filePath5, rowConverter5),
        d3.csv(filePath6, rowConverter6),
        d3.csv(filePath7, rowConverter7)

    ]).then(([dataset1, dataset2,dataset3,dataset4,dataset5,dataset6,dataset7]) => {
      //  console.log(dataset1)
      //  console.log(dataset2)
      //   console.log(dataset3)
      //   console.log(dataset4)
        const joinedData = dataset1.map((d1) => {
            const match = dataset3.find(
                (d3) =>
                    d1.team_abbreviation === d3.team &&
                    d1.season == d3.season

            );

            const match2 = dataset4.find(
                (d4) =>
                    d1.player_name === d4.player_name
            );

            const match3 = dataset2.find(
                (d2) =>
                    d1.player_name === d2.player_name
            );
            
            const match4 = dataset6.find(
                (d6) =>
                    d6.player_name === d1.player_name
            );
            const { salary } = match3 || {}; 


            if (match) {
                return {
                    ...d1,
                   ...match,
                   ...match2,
                   ...salary,
                   ...match4
                };
            }

            return null;
        });

        const joinedData2 = dataset5.map((d5) => {
            const match = dataset1.find(
                (d1) =>
                    d5.player_name === d1.player_name &&
                    d5.season === d1.season
            );

            if (match) {
                return {
                    ...d5,
                    ...match
                };
            }

            return null;
        });

        const cleanedData2 = joinedData.filter((d) => d !== null);

        
        const cleanedData = joinedData.filter((d) => d !== null);

        console.log(cleanedData);
    

    
        plot1(dataset6);
        plot2(dataset6);
        plot3(cleanedData);
        plot4(cleanedData);
        plot5(cleanedData2);
        plot6(dataset7);
    });
};

let plot1 = function (data) {
   // console.log(data)
    const filteredData = data.filter(player => player.ts_pct <= 1);
    const margin = { top: 20, right: 20, bottom: 40, left: 40 };
    const width = 600 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    const svg = d3.select("#p1_plot")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    const xScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.total_points)])
        .range([0, width]);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.win_shares)])
        .range([height, 0]);
    
    const colorScale = d3.scaleSequential()
        .domain([0, d3.max(data, d => d.total_rebounds)])
        .interpolator(d3.interpolateBlues);
    

    const assistScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.total_assists)])
        .range([1,6.5 ]);



    // x-axis
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xScale));

    // y-axis
    svg.append("g")
        .call(d3.axisLeft(yScale));



    const Tooltip = d3
        .select('#p1_plot')
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "white")
        .style("border-width", "1px")
        .style("border-radius", "1px")
        .style("border", "1px solid black") 
        .style("padding", "10px")
        .style("font-size", "10px") 
        .style("color", "black");

    var mouseover = function (event, d) {
        Tooltip
            .style("opacity", 1)
            .style("top", (event.pageY - 10) + "px")
            .style("left", (event.pageX + 10) + "px")
            .html(`<strong>Player:</strong> ${d.player_name}<br>
            <strong>Win Shares:</strong> ${d.win_shares}<br>
           <strong>Total Points:</strong> ${d.total_points}<br>
            <strong>Total Assists:</strong> ${d.total_assists}<br>
           <strong>Total Rebounds:</strong> ${d.total_rebounds}`);
        d3.select(this)
            .style("stroke", "black")
    };

    var mousemove = function (event, d) {
      
        Tooltip
            .style("top", (event.pageY - 10) + "px")
            .style("left", (event.pageX + 10) + "px");
    };


    var mouseleave = function (event, d) {
        Tooltip
            .style("opacity", 0);
        d3.select(this)
            .style("stroke", "none")
    };
    
    
    
    const updatePlot = (data) => {
   
        svg.selectAll(".point").remove();

        svg
            .selectAll(".point")
            .data(data)
            .enter()
            .append("circle")
            .attr("class", "point")
            .attr("cx", d => xScale(d.total_points))
            .attr("cy", d => yScale(d.win_shares))
            .attr("fill", d => colorScale(d.total_rebounds))
            .attr("r", d => assistScale(d.total_assists))
            .on("mouseover", mouseover)
            .on("mousemove", mousemove)
            .on("mouseleave", mouseleave);
    };

  
    updatePlot(data);
    
    svg.append("text")
        .attr("class", "axis-label")
        .attr("transform", "translate(" + (width / 2) + " ," + (height + margin.top + 10) + ")")
        .style("text-anchor", "middle")
        .text("Total Points");

    svg.append("text")
        .attr("class", "axis-label")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x", 0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Win Shares");

    svg.append("text")
        .attr("x", width / 2)
        .attr("y", margin.top / 2)
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .text("NBA Players' Scoring Average vs Shooting Percentage");




};


let plot2=function(data){
    const filtered = data.filter(player => player.three_point_percentage >= 0);
   
    const margin = { top: 20, right: 20, bottom: 40, left: 40 };
    const width = 600 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    const svg = d3.select("#p2_plot")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

   
    const xScale = d3.scaleLinear()
        .domain([0, d3.max(filtered, d => d.three_point_percentage)])
        .range([margin.left, width - margin.right]);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(filtered, d => d.win_shares)])
        .range([height - margin.bottom, margin.top]);
    
    const colorScale = d3.scaleSequential()
        .domain([0, d3.max(data, d => d.win_shares)])
        .interpolator(d3.interpolateBlues);



    
    const Tooltip = d3
        .select('#p2_plot')
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "1px")
        .style("border-radius", "1px")
        .style("border", "1px solid black") 
        .style("font-size", "10px")
        .style("color", "black");
    
    var mouseover = function (event, d) {
        Tooltip
            .style("opacity", 1)
            .html(`<strong>Player:</strong> ${d.player_name}<br>
            <strong>Three Point Percentage:</strong> ${d.three_point_percentage}<br>
           <strong>Win Shares:</strong> ${d.win_shares}<br>`);
        d3.select(this)
            .style("stroke", "black")
            .style("opacity", 1);
    };

    var mousemove = function (event, d) {

        Tooltip
            .style("top", (event.pageY - 10) + "px")
            .style("left", (event.pageX + 10) + "px");
    };


    var mouseleave = function (event, d) {
        Tooltip
            .style("opacity", 0);
        d3.select(this)
            .style("stroke", "none")
            .style("opacity", 0.8);}
    
   
    const updatePlot = (data) => {
        
        svg.selectAll(".point").remove();

        
        svg
            .selectAll(".point")
            .data(filtered)
            .enter()
            .append("circle")
            .attr("class", "point")
            .attr("cx", d => xScale(d.three_point_percentage))
            .attr("cy", d => yScale(d.win_shares))
            .attr("fill", d => colorScale(d.win_shares))
            .attr("r", 3)
            .on("mouseover", mouseover)
            .on("mousemove", mousemove)
            .on("mouseleave", mouseleave);
    };


    updatePlot(data);


    svg.append("g")
        .attr("transform", `translate(0, ${height - margin.bottom})`)
        .call(d3.axisBottom(xScale));

    svg.append("g")
        .attr("transform", `translate(${margin.left}, 0)`)
        .call(d3.axisLeft(yScale));
   
    svg.append("text")
        .attr("x", width / 2)
        .attr("y", (height - margin.bottom / 2) + 10)
        .attr("text-anchor", "middle")
        .text("three point percetage");

    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -height / 2)
        .attr("y", margin.left / 2)
        .attr("text-anchor", "middle")
        .text("win shares");

    svg.append("text")
        .attr("x", width / 2)
        .attr("y", margin.top / 2)
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .text("three point percentage v. Win Shares ");

};

let plot3 = function (data) {


    const margin = { top: 20, right: 20, bottom: 40, left: 40 };
    const width = 800 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    const svg = d3.select("#p3_plot")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
   // console.log(data)

 
    const ageData = Array.from(d3.group(data, d => Math.floor(d.age)), ([key, values]) => {
        const pointsAvg = values.length > 0 ? d3.mean(values, d => d.points_per_game) : 0;
        const reboundsAvg = values.length > 0 ? d3.mean(values, d => d.rebounds_per_game) : 0;
        const assistsAvg = values.length > 0 ? d3.mean(values, d => d.assists_per_game) : 0;
        const maxPRAPlayer = values.length > 0 ? d3.max(values, d => d.assists_per_game + d.rebounds_per_game + d.points_per_game) : 0;
        return {
            age: key,
            pointsAvg,
            reboundsAvg,
            assistsAvg,
            maxPRAPlayer
        };
    }).filter(d => d.pointsAvg !== undefined); // Filter out objects with undefined age

    ageData.sort((a, b) => a.age - b.age);

   // console.log(ageData)


    const subCategories = ['pointsAvg', 'reboundsAvg', 'assistsAvg'];


    const colorScale = d3.scaleOrdinal()
        .domain(subCategories)
        .range(['#0074D9', '#6495ED', '#ADD8E6']);


    const xScale = d3.scaleBand()
        .domain(ageData.map(d => d.age))
        .range([0, width])
        .padding(0.1);


    const yScale = d3.scaleLinear()
        .domain([0, d3.max(ageData, d => d.maxPRAPlayer)])
        .range([height, 0]);

    const Tooltip = d3
        .select('#p3_plot')
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "1px")
        .style("border-radius", "1px")
        .style("border", "1px solid black") 
        .style("padding", "10px")
        .style("font-size", "10px") 
        .style("color", "black"); 
        
    var mouseover = function (event, d) {
        Tooltip
            .style("opacity", 1)
            .html(`
           <strong>PRA:</strong> ${d.value}<br>`);
        d3.select(this)
            .style("stroke", "black")
            .style("opacity", 1);
    };
    var mousemove = function (event, d) {

        Tooltip
            .style("top", (event.pageY - 10) + "px")
            .style("left", (event.pageX + 10) + "px");
    };


    var mouseleave = function (event, d) {
        Tooltip
            .style("opacity", 0);
        d3.select(this)
            .style("stroke", "none")
            .style("opacity", 0.8);
    }

 
    svg.selectAll('.stacked-bar-group')
        .data(ageData)
        .enter()
        .append('g')
        .attr('class', 'stacked-bar-group')
        .attr('transform', d => `translate(${xScale(d.age)}, 0)`)
        .selectAll('.stacked-bar')
        .data(d => subCategories.map(category => ({ category, value: d[category] })))
        .enter()
        .append('rect')
        .attr('class', 'stacked-bar')
        .attr('x', 0)
        .attr('y', d => yScale(d.value))
        .attr('width', xScale.bandwidth())
        .attr('height', d => height - yScale(d.value))
        .attr('fill', d => colorScale(d.category))
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave);

    svg.selectAll('.max-pra-point')
        .data(ageData)
        .enter()
        .append('circle')
        .attr('class', 'max-pra-point')
        .attr('cx', d => xScale(d.age) + xScale.bandwidth() / 2)
        .attr('cy', d => yScale(d.maxPRAPlayer))
        .attr('r', 4)
        .attr('fill', 'black')
        .style('cursor', 'pointer')
        .on('mouseover', function (event, d) {
            Tooltip
                .style('opacity', 1)
                .html(`<strong>Age:</strong> ${d.age}<br>
             <strong>Max PRA:</strong> ${d.maxPRAPlayer.toFixed(2)}`);
            d3.select(this)
                .style('stroke', 'black')
                .style('opacity', 1);
        })
        .on('mousemove', function (event) {
            Tooltip
                .style('top', (event.pageY - 10) + 'px')
                .style('left', (event.pageX + 10) + 'px');
        })
        .on('mouseleave', function () {
            Tooltip
                .style('opacity', 0);
            d3.select(this)
                .style('stroke', 'none')
                .style('opacity', 1);
        });
    

    svg.append("text")
        .attr("class", "axis-title")
        .attr("x", width / 2)
        .attr("y", height + margin.top + 30)
        .style("text-anchor", "middle")
        .text("Age");

   
    svg.append("text")
        .attr("class", "axis-title")
        .attr("transform", "rotate(-90)")
        .attr("x", -height / 2)
        .attr("y", -margin.left + 10)
        .style("text-anchor", "middle")
        .text("PRA");


    const legend = svg.append("g")
        .attr("class", "legend")
        .attr("transform", `translate(${width-100}, ${margin.top})`);

   
    legend.selectAll(".legend-rect")
        .data(subCategories)
        .enter()
        .append("rect")
        .attr("class", "legend-rect")
        .attr("x", 0)
        .attr("y", (d, i) => i * 20)
        .attr("width", 10)
        .attr("height", 10)
        .attr("fill", d => colorScale(d));

   
    legend.selectAll(".legend-label")
        .data(subCategories)
        .enter()
        .append("text")
        .attr("class", "legend-label")
        .attr("x", 20)
        .attr("y", (d, i) => i * 20 + 9)
        .style("font-size", "12px")
        .text(d => d);

    const xAxis = d3.axisBottom(xScale);

  
    svg.append("g")
        .attr("class", "x-axis")
        .attr("transform", `translate(0, ${height})`)
        .call(xAxis);

    const yAxis = d3.axisLeft(yScale);

    
    svg.append("g")
        .attr("class", "y-axis")
        .call(yAxis);

};

let plot6 = function (data) {
    const margin = { top: 50, bottom: 50, left: 150, right: 40 };
    const width = 600 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    const svg = d3
        .select('#p7_plot')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);

    // Sort the data by Wins
    data.sort((a, b) => b.Wins - a.Wins);

    const teams = data.map((team) => team.Team);
    const ortgs = data.map((team) => team.ORtg);
    const drtgs = data.map((team) => team.DRtg);
    const wins = data.map((team) => team.Wins);

    const yScale = d3.scaleBand().range([0, height]).padding(0.1);
    const xScale = d3.scaleLinear().range([0, width]);

    yScale.domain(teams);
    xScale.domain([0, d3.max([...ortgs, ...drtgs])]);

    const Tooltip = d3
        .select('#p7_plot')
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "1px")
        .style("border-radius", "1px")
        .style("border", "1px solid black") // Add border style
        .style("padding", "10px")
        .style("font-size", "10px") // Adjust the font size to make the tooltip smaller
        .style("color", "black"); // Add text color

    svg.selectAll('.bar-ortg')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'bar-ortg')
        .attr('y', (d) => yScale(d.Team))
        .attr('height', yScale.bandwidth())
        .attr('x', 0)
        .attr('width', (d) => xScale(d.ORtg))
        .style('fill', 'rgba(54, 162, 235, 0.7)')
        .on('mouseover', function (event, d) {
            Tooltip
                .style('opacity', 1)
                .html(`<strong>ortg:</strong> ${d.ORtg}<br>`);
            d3.select(this)
                .style('stroke', 'black')
                .style('opacity', 1);
        })
        .on('mousemove', function (event) {
            Tooltip
                .style('top', (event.pageY - 10) + 'px')
                .style('left', (event.pageX + 10) + 'px');
        })
        .on('mouseleave', function () {
            Tooltip
                .style('opacity', 0);
            d3.select(this)
                .style('stroke', 'none')
                .style('opacity', 1);
        });

    svg.selectAll('.bar-drtg')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'bar-drtg')
        .attr('y', (d) => yScale(d.Team))
        .attr('height', yScale.bandwidth())
        .attr('x', 0)
        .attr('width', (d) => xScale(d.DRtg))
        .style('fill', 'rgba(255, 99, 132, 0.7)')
        .on('mouseover', function (event, d) {
            Tooltip
                .style('opacity', 1)
                .html(`<strong>DRtg:</strong> ${d.DRtg}<br>`);
            d3.select(this)
                .style('stroke', 'black')
                .style('opacity', 1);
        })
        .on('mousemove', function (event) {
            Tooltip
                .style('top', (event.pageY - 10) + 'px')
                .style('left', (event.pageX + 10) + 'px');
        })
        .on('mouseleave', function () {
            Tooltip
                .style('opacity', 0);
            d3.select(this)
                .style('stroke', 'none')
                .style('opacity', 1);
        });

    svg.append('g').call(d3.axisLeft(yScale));
    svg.append('g').attr('transform', `translate(0, ${height})`).call(d3.axisBottom(xScale));

    // X-axis label
    svg
        .append('text')
        .attr('class', 'axis-label')
        .attr('x', width / 2)
        .attr('y', height + 40)
        .text('Rating');

    // Tooltip
    const tooltip = d3
        .select('body')
        .append('div')
        .attr('class', 'tooltip')
        .style('opacity', 0);

    function showTooltip(d) {
        tooltip
            .style('opacity', 1)
            .html(`<strong>${d.Team}</strong><br>ORtg: ${d.ORtg}<br>DRtg: ${d.DRtg}`)
            .style('left', `${d3.event.pageX}px`)
            .style('top', `${d3.event.pageY}px`);
    }

    function hideTooltip() {
        tooltip.style('opacity', 0);
    }

    // Legend
    const legend = svg.append('g').attr('class', 'legend').attr('transform', `translate(${width - 50}, -60)`);

    legend
        .append('rect')
        .attr('class', 'legend-bar-ortg')
        .attr('x', 10)
        .attr('y', 10)
        .attr('width', 20)
        .attr('height', 20)
        .style('fill', 'rgba(54, 162, 235, 0.7)');

    legend
        .append('text')
        .attr('class', 'legend-text-ortg')
        .attr('x', 40)
        .attr('y', 25)
        .text('ORtg');

    legend
        .append('rect')
        .attr('class', 'legend-bar-drtg')
        .attr('x', 10)
        .attr('y', 40)
        .attr('width', 20)
        .attr('height', 20)
        .style('fill', 'rgba(255, 99, 132, 0.7)');

    legend
        .append('text')
        .attr('class', 'legend-text-drtg')
        .attr('x', 40)
        .attr('y', 55)
        .text('DRtg');
};

let plot4 = function (data) {
    // Sort the dataset based on total_points in descending order
    const players = data.sort((a, b) => b.total_points - a.total_points);
    //  console.log(players)

    // Select the top 1000 players
    const top1000Players = data.slice(0, 1000);
   // console.log(top1000Players)

    const margin = { top: 50, bottom: 50, left: 40, right: 40 };
    const width = 600 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    const svg = d3.select('#p4_plot')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);

    let stateSym = {
        AZ: 'Arizona',
        AL: 'Alabama',
        AK: 'Alaska',
        AR: 'Arkansas',
        CA: 'California',
        CO: 'Colorado',
        CT: 'Connecticut',
        DC: 'District of Columbia',
        DE: 'Delaware',
        FL: 'Florida',
        GA: 'Georgia',
        HI: 'Hawaii',
        ID: 'Idaho',
        IL: 'Illinois',
        IN: 'Indiana',
        IA: 'Iowa',
        KS: 'Kansas',
        KY: 'Kentucky',
        LA: 'Louisiana',
        ME: 'Maine',
        MD: 'Maryland',
        MA: 'Massachusetts',
        MI: 'Michigan',
        MN: 'Minnesota',
        MS: 'Mississippi',
        MO: 'Missouri',
        MT: 'Montana',
        NE: 'Nebraska',
        NV: 'Nevada',
        NH: 'New Hampshire',
        NJ: 'New Jersey',
        NM: 'New Mexico',
        NY: 'New York',
        NC: 'North Carolina',
        ND: 'North Dakota',
        OH: 'Ohio',
        OK: 'Oklahoma',
        OR: 'Oregon',
        PA: 'Pennsylvania',
        RI: 'Rhode Island',
        SC: 'South Carolina',
        SD: 'South Dakota',
        TN: 'Tennessee',
        TX: 'Texas',
        UT: 'Utah',
        VT: 'Vermont',
        VA: 'Virginia',
        WA: 'Washington',
        WV: 'West Virginia',
        WI: 'Wisconsin',
        WY: 'Wyoming'
    };

    // Define a function to update the plot based on the filtered data


    const mapPromise = d3.json('./us-states.json');



    mapPromise.then(map => {
        const path = d3.geoPath().projection(d3.geoAlbersUsa().fitSize([width, height], map));

        const playersByRegion = d3.group(top1000Players, d => d.region);
//        console.log(playersByRegion)

        // const playerCountByRegion = Array.from(playersByRegion, ([region, players]) => ({
        //     Region: region,
        //     PlayerCount: players.length
        // }));

       
        const playerCountByRegion = Array.from(playersByRegion, ([region, players]) => ({
            Region: region,
            PlayerCount: players.length
        }))
            .filter(d => d.Region != undefined);

        //console.log(playerCountByRegion);
        // Create a map of player count by region
        const playerCountMap = new Map(playerCountByRegion.map(d => [d.Region, d.PlayerCount]));

        // Color scale
        const maxPlayerCount = d3.max(playerCountByRegion, d => d.PlayerCount);
        const colorScale = d3.scaleSequential(d3.interpolateBlues)
            .domain([1, maxPlayerCount]);


        const tooltip = d3.select('#p4_plot').append('div')
            .attr('class', 'tooltip')
            .style('opacity', 0)
            .style("background-color", "white")
            .style("border", "solid")
            .style("border-width", "1px")
            .style("border-radius", "1px")
            .style("border", "1px solid black") // Add border style
            .style("padding", "10px")
            .style("font-size", "10px") // Adjust the font size to make the tooltip smaller
            .style("color", "black"); // Add text color
    ;

        svg.selectAll('path')
            .data(map.features)
            .enter()
            .append('path')
            .attr('d', path)
            .style('fill', d => {
                const state = stateSym[d.properties.name];  
                //console.log(d.properties.name); // Log the name property
                const playerCount = playerCountMap.get(state) || 0; // If no player count data available, set to 0
                return colorScale(playerCount);
            })
            .on('mouseover', (event, d) => {
                //console.log(d); // Check the data and properties

                const state = stateSym[d.properties.name];
                const playerCount = playerCountMap.get(state) || 0;

                d3.select(event.currentTarget)
                    .style("stroke", "black")
                    .style("stroke-width", "2");

                tooltip
                    .style("opacity", 0.9);

                tooltip.html(`State: ${state}<br/>Player Count: ${playerCount}`)
                    .style("left", (event.pageX + 5) + "px")
                    .style("top", (event.pageY - 5) + "px");
                    
            })
            .on('mouseout', function (d) {
                d3.select(this)
                    .style('stroke', 'none');

                tooltip
                    .style('opacity', 0);
            });

        const zoom = d3.zoom()
            .scaleExtent([1, 8])
            .on('zoom', zoomed);

        svg.call(zoom);

        function zoomed(event) {
            const { transform } = event;
            svg.attr('transform', transform);
            svg.attr('stroke-width', 1 / transform.k);
        }
    });

    svg.append("text")
        .attr("x", width / 2)
        .attr("y", margin.top / 2)
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .text("NBA Players' Birthplace");
}


let plot5 = function () {

    
    let position = 'All';

    function force_graph(position) {
        console.log(position)

        // Clear the SVG by removing all child elements
        d3.select("#p5_plot").selectAll("*").remove();
        const margin = { top: 10, right: 30, bottom: 30, left: 40 };
        const width = 1250 - margin.left - margin.right;
        const height = 1250  - margin.top - margin.bottom;

        const svg = d3.select('#p5_plot')
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top})`);

        // zoom interactivity
        const zoom = d3.zoom()
            .scaleExtent([0.5, 2])
            .on('zoom', zoomed);

        svg.call(zoom);

        function zoomed(event) {
            svg.attr('transform', event.transform);
        }

        d3.json('node_link_dataset5.json').then(function (data) {
           

            console.log(data);
            const allNodes = data.nodes;
            filteredNodes = allNodes;
            let filteredLinks = data.links;

            if (position !== "All") {
                filteredNodes = filteredNodes.filter((d) => d.Pos === position);
                filteredLinks = filteredLinks.filter(
                    (d) =>
                        filteredNodes.find((node) => node.id === d.source) &&
                        filteredNodes.find((node) => node.id === d.target)
                );
            }
            console.log(filteredNodes,filteredLinks)
            const similarityThreshold = 0.85; 
            //const filteredLinks = data.links;
           
            const colorScale = d3.scaleOrdinal(d3.schemeCategory10)
                .domain(data.nodes.map(d => d.position));

            const Tooltip = d3
                .select('#p5_plot')
                .append("div")
                .style("opacity", 0)
                .attr("class", "tooltip")
                .style("background-color", "white")
                .style("border-width", "1px")
                .style("border-radius", "1px")
                .style("border", "1px solid black") // Add border style
                .style("padding", "10px")
                .style("font-size", "10px") // Adjust the font size to make the tooltip smaller
                .style("color", "black"); // Add text color

            var mouseover = function (event, d) {
                Tooltip
                    .style("opacity", 1)
                    .style("top", (event.pageY - 10) + "px")
                    .style("left", (event.pageX + 10) + "px")
                    .html(`<strong>Player:</strong> ${d.id}<br>
                <strong>Points:</strong> ${d.Points}<br>`);
                d3.select(this)
                    .style("stroke", "black")
            };

            var mousemove = function (event, d) {
                Tooltip
                    .style("top", (event.pageY - 10) + "px")
                    .style("left", (event.pageX + 10) + "px");
            };

            var mouseleave = function (event, d) {
                Tooltip
                    .style("opacity", 0);
                d3.select(this)
                    .style("stroke", "none")
            };

            const simulation = d3.forceSimulation(filteredNodes)
                .force(
                    'link',
                    d3.forceLink(filteredLinks)
                        .id(function (d) {
                            return d.id;
                        })
                        .distance(400) 
                )
                .force('charge', d3.forceManyBody().strength(-800))
                .force('center', d3.forceCenter(width / 2, height / 2))
                .on('end', ticked);

            const thicknessScale = d3
                .scaleLinear()
                .domain([0, d3.max(filteredLinks, d => d.weight)])
                .range([0.01, 2]);

            const link = svg
                .selectAll('line')
                .data(filteredLinks)
                .join('line')
                .style('stroke', '#aaa')
                .style('stroke-opacity', d => thicknessScale(d.weight))
                .style('stroke-width', d => thicknessScale(d.weight));

            const node = svg
                .selectAll('circle')
                .data(filteredNodes)
                .join('circle')
                .attr('r', 10)
                .style('fill', d => colorScale(d.Pos))
                .on('mouseover', mouseover)
                .on('mousemove', mousemove)
                .on('mouseleave', mouseleave);

            const labels = svg
                .selectAll('.label')
                .data(filteredNodes)
                .join('text')
                .attr('class', 'label')
                .text(d => d.name)
                .style('font-size', '12px')
                .attr('text-anchor', 'middle')
                .attr('alignment-baseline', 'middle')
                .attr('dy', '0.35em');

            function ticked() {
                link
                    .attr('x1', function (d) {
                        return d.source.x;
                    })
                    .attr('y1', function (d) {
                        return d.source.y;
                    })
                    .attr('x2', function (d) {
                        return d.target.x;
                    })
                    .attr('y2', function (d) {
                        return d.target.y;
                    });

                node
                    .attr('cx', function (d) {
                        return Math.max(10, Math.min(width - 10, d.x));
                    })
                    .attr('cy', function (d) {
                        return Math.max(10, Math.min(height - 10, d.y));
                    });

                labels.attr('x', d => Math.max(10, Math.min(width - 10, d.x)))
                    .attr('y', d => Math.max(10, Math.min(height - 10, d.y)));
            }

            const legend = svg
                .append('g')
                .attr('class', 'legend')
                .attr('transform', `translate(${width}, ${height - 500})`);

            const legendItems = legend
                .selectAll('.legend-item')
                .data(colorScale.domain())
                .enter()
                .append('g')
                .attr('class', 'legend-item')
                .attr('transform', (d, i) => `translate(0, ${i * 20})`);

            legendItems
                .append('circle')
                .attr('r', 6)
                .style('fill', d => colorScale(d));

            legendItems
                .append('text')
                .attr('x', 10)
                .attr('y', 5)
                .style('font-size', '12px')
                .text(d => d);
        });
    }

    force_graph(position);

    d3.json('node_link_dataset5.json').then(function (data) {
    
        const allNodes = data.nodes;
        let filteredNodes = allNodes; 

        const positions = [...new Set(allNodes.map((d) => d.Pos))];
        const filterButtons = d3
            .selectAll(".filter-button") 
            .on("click", function () {
                const position = d3.select(this).attr("data-position");
                console.log(position)
                force_graph(position);
            });

        
    });

  
    
    
};








      

