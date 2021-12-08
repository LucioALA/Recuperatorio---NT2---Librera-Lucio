

export default {
  name: 'src-componentes-front',
  components: {},
  props: [],
  data () {
    return {
      formData : this.getInicialData(),
      
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    getInicialData() {
      return {
        dolar : 0,
        edad : 0,
        
      }
    }
  }
}


