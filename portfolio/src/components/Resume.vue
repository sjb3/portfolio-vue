<template>
<div class="resume">

  <h1 v-cloak>Justin Byun</h1>
  <h2 class="title"><em>Full-Stack Software Engineer</em></h2></br>

  <h3 class="manifesto"><em>As a former Biotech Researcher, </br>I learned the beauty of analytical skills and value of critical thinking: the artistry of science.
    Now, as a full-stack developer, I’d like to add the artistry of science to programming to develop user-friendly, efficient and resource saving apps. </em></h3>
  </br>
  <h2>Experiences</h2></br>
    <h3>Per Diem ( University of Washington | Seattle WA, 07/13 - 04/16)</h3></br>
    <ul>
      <li>Electronics Processing Assistant: hard drive/data destruction</li></br>
      <li>Research assistant ( Make-A-Wish funded ): beverage consumption study in high schools in Washington State,</br>
        surveyed students and participated in building protocol </li></br>
    </ul>
    <h3>Research Scientist ( University of Washington-Biochemistry | Seattle WA: 07/07-06/13 )</h3></br>
    <ul>
      <li>Prep DNA samples and sequence them: optimize and trouble shooting reaction</li></br>
      <li>Monitoring accuracy and integrity of data produced and posting to the database</li></br>
      <li>Control sample flows and process to maximize the resource utilization</li></br>
      <li>Manage and maintain the lab and equipmen</li><br>
    </ul>

    <h3>Research Engineer ( University of Washington-Pharmacology, Howard Hughes Medical Institute | Seattle WA: 08/05-10/05 )</h3></br>
    <ul>
    <li> Investigate the roles of cell signaling molecules and pathways in cell growth and development</li></br>
    <li>Therapeutic goals and projections: understand and control tumorigenesis</li></br>
    </ul></br>

  <h2>Education</h2></br>
    <h3>Code Fellows ( 2016, Seattle WA ) </h3></br>
      <h4>Certificate in Advanced Full-Stack JavaScript Dev: Sept, 2016</h4></br>
    <h3>University of Washington ( 2005, Seattle WA ) </h3></br>
      <h4>Bachelor’s of Sciences: Majors in Biochemistry and Microbiology, Minor in Chemistry</h4></br>
    </h3><br>

  <h2>Skill Sets</h2>
    <h3>advanced skills;</h3>
    <h4>javaScript, jQuery, nodeJS, expressJS, buebirdJS, AngularJS, ReactJS, python, django, webPack, REST API, Mocha, GulpJS, HTML5, CSS3/SASS, SQL, noSQL(mongoDB)
    </h4>
    <h3>intermediate;</h3>
    <h4>R, AWS(web dev-assoc), Docker(ver 1.12)</h4>
  </br>

  <h2>Completed Group Projects</h2>
    <h3>_brewBuddy_coffeeCompanion (Sept 2016)</h3>
      <ul>
      <li>Focus Group: from everyday coffee drinkers to coffee aficinado</li>
      <li>Objectives: clients can customize their daily morning joe's to order, along with optional reviews/personal blogs</li>
      <li>For Backend, API is created with nodeJS utilizing expressJS to handle user requests, and mongoDB, and later tested with mocha and gulpJS:</br>
        For Frontend, angularJS, HTML5, CSS3 were used along with webPack and subsequent testing with Karma and Jasmine</li>
    </ul>

    <h3>_concert Finder(Feb 2016)</h3>
      <ul>
      <li>Focus Group: concert goers worldwide</li>
      <li>Objectives: lets clients find concerts of interests at keystrokes, location service with ticket info at songKick link</li>
      <li>Created with songKick and mapBox API’s with leafletJS</li>
    </ul>
</div>

</template>

<script>
  export default {
    name: 'resume',
  }
</script>

<style scoped>
  #name {
    font-weight: bold;
  }
  .resume {
      opacity: 0.5;
  }

  [v-cloak] {
   background-color:yellow;
  }

</style>
