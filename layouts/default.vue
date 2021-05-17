<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

/*SHIPPING STYLES*/

template {
  display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    justify-content: space-between;
    width: 100%;
}

.cuote-option {
    display:block;
    margin: 20px;
    border-radius: 4px;
    padding: 10px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.6), 0 3px 6px 0 rgba(0, 0, 0, 0.5);
  }

.shipping, .shipping-time {
  display: block;
  margin: auto;
  padding: 5px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 3px 0 rgba(0, 0, 0, 0.19);
  border-radius: 4px;
}

.total {
  display: block;
  margin: auto;
  background-color: DodgerBlue;
  padding: 5px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 3px 0 rgba(0, 0, 0, 0.19);
  border-radius: 4px;
  color: white;
  margin-top: 5px;
  margin-bottom: 5px;
}

.shipping h4, .total h4, .shipping-time h4 {
  font-size: 16px;
  text-align: center;
  margin: auto;
}

</style>
