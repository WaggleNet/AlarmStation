<template lang="pug">
#app
  b-modal#active-alarm-modal(
    v-model="alarmWindowOpen"
  )
    div(slot="modal-title") Active Alarm
  header
    .alarm-bar.flash-orange.flex-span
      span
        span.material-icons warning
        | 2 PENDING WARNINGS
      span.right 00:42:11
    b-button.toolbar-btn
      | ACK
    b-button.toolbar-btn
      | CLR
  main
    .alarm-panel.warning.active(v-for='i in 2')
      .panel-content
        h1 Clus-A1 CPU Overheat (73 > 70)
        .panel-metadata
          p
            span.material-icons access_time
            | 5 hrs ago
          p
            span.material-icons input
            | cpu-agent.clus-a1
      .panel-actions
        b-button.toolbar-btn
          span.material-icons done
        b-button.toolbar-btn
          span.material-icons delete

    .alarm-panel.error
      .panel-content
        h1 Wharf offline
        .panel-metadata
          p
            span.material-icons access_time
            | 5 hrs ago
          p
            span.material-icons input
            | cpu-agent.clus-a1
      .panel-actions
        b-button.toolbar-btn
          span.material-icons done
        b-button.toolbar-btn
          span.material-icons delete

  footer
    .flex-span
      p Blinker connected: /dev/ttyUSB3
    b-button.toolbar-btn
      | MUTE ALL
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    alarmWindowOpen: true
  })
}
</script>

<style lang="sass">
html, body
  height: 100%
.flex-span
  flex-grow: 1
#app
  height: 100%
  display: flex
  color: #eee
  flex-direction: column
  font-family: 'Saira', sans-serif
  .material-icons
    vertical-align: middle
  header, footer
    flex-grow: 0
    height: 60px
    display: flex
  main
    flex-grow: 1
    display: block
  header
    border-bottom: 1px solid #aaa
  footer
    border-top: 1px solid #aaa

.alarm-bar
  padding: 10px 16px
  span
    vertical-align: middle
    font-size: 28px
    color: white
  span.right
    text-align: right
    float: right

.flash-orange
  animation-name: flash-orange
  animation-duration: 1s
  animation-iteration-count: infinite
  animation-direction: alternate

.alarm-panel
  margin: 16px 12px
  border: 1px solid #aaa
  display: flex
  .panel-content
    padding: 15px
    flex-grow: 1
  .panel-metadata
    display: flex
    width: 100%
    p
      margin-bottom: 0
      margin-right: 20px
      .material-icons
        margin-right: 5px
  .panel-actions
    display: flex
    flex-direction: column
    button
      flex-grow: 1
  &.warning
    border-left: 15px solid orange
  &.error
    border-left: 15px solid red
  &.warning.active
    animation-name: flash-orange-light
    animation-duration: 1s
    animation-iteration-count: infinite
    animation-direction: alternate
    animation-timing-function: ease-in
    h1
      animation-name: flash-orange-text
      animation-duration: 0.3s
      animation-iteration-count: infinite
      animation-direction: alternate
      animation-timing-function: ease-in

@keyframes flash-orange
  from {background-color: orange;}
  to {background-color: rgba(0, 0, 0, 0);}

@keyframes flash-orange-light
  from {box-shadow: 2px 2px 20px orange;}
  to {box-shadow: 2px 2px 20px rgba(orange, 0.3);}

@keyframes flash-orange-text
  from {color: orange;}
  to {color: rgba(#999, 0.6);}

</style>
