<script>
    export let work;
  </script>
  
  <div class="card">
    <img src={work.image} alt={work.title} />
    <h2>{work.title}</h2>
    <p>{work.description}</p>
    <a href={work.link}>View Work</a>
  </div>
  