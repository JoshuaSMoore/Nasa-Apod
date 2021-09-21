<template>
  <div class="about">
    <card class="spaceCard">
      <card-header>
        <h1 class="text-center">
          "Date Selector"
        </h1>
      </card-header>
      <card-body class="shadow">
        <calendar>
        </calendar>
      </card-body>
    </card>
  </div>
</template>

<script>
export default {
  name: 'CalendarPage'
}
</script>
<style>
.spaceCard{
  background-color: aqua;
}

</style>
