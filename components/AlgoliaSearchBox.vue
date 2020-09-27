<template>
  <form
    id="search-form"
    class="algolia-search-wrapper search-box"
    role="search"
  >
    <input
      id="algolia-search-input"
      class="search-query"
      :placeholder="placeholder"
    >
  </form>
</template>

<script>
export default {
  name: 'AlgoliaSearchBox',

  props: ['options'],

  data () {
    return {
      placeholder: undefined
    }
  },

  watch: {
    $lang (newValue) {
      this.update(this.options, newValue)
    },

    options (newValue) {
      this.update(newValue, this.$lang)
    }
  },

  mounted () {
    this.initialize(this.options, this.$lang)
    this.placeholder = this.$site.themeConfig.searchPlaceholder || ''
  },

  methods: {
    initialize (userOptions, lang) {
      Promise.all([
        import(/* webpackChunkName: "docsearch" */ 'docsearch.js/dist/cdn/docsearch.min.js'),
        import(/* webpackChunkName: "docsearch" */ 'docsearch.js/dist/cdn/docsearch.min.css')
      ]).then(([docsearch]) => {
        docsearch = docsearch.default
        const { algoliaOptions = {}} = userOptions
        docsearch(Object.assign(
          {},
          userOptions,
          {
            inputSelector: '#algolia-search-input',
            // #697 Make docsearch work well at i18n mode.
            algoliaOptions: Object.assign({
              'facetFilters': [`lang:${lang}`].concat(algoliaOptions.facetFilters || [])
            }, algoliaOptions),
            handleSelected: (input, event, suggestion) => {
              const { pathname, hash } = new URL(suggestion.url)
              const routepath = pathname.replace(this.$site.base, '/')
              const _hash = decodeURIComponent(hash)
              this.$router.push(`${routepath}${_hash}`)
            }
          }
        ))
      })
    },

    update (options, lang) {
      this.$el.innerHTML = '<input id="algolia-search-input" class="search-query">'
      this.initialize(options, lang)
    }
  }
}
</script>

<style lang="stylus">
@require '../styles/config'
@require '../styles/fallback'

.algolia-search-wrapper
  & > span
    vertical-align middle
  .algolia-autocomplete
    line-height normal
    .ds-dropdown-menu
      bgColor $bodyBgColorDefault var(--bodyBgColor)
      border 1px solid
      borderColor $borderColorDefault var(--borderColor)
      border-radius 4px
      font-size 16px
      margin 6px 0 0
      padding 4px
      text-align left
      &:before
        borderColor $borderColorDefault var(--borderColor)
      [class*=ds-dataset-]
        border none
        padding 0
      .ds-suggestions
        margin-top 0
      .ds-suggestion
        border-bottom 1px solid
        borderBottomColor $borderColorDefault var(--borderColor)
    .algolia-docsearch-suggestion--highlight
      text $headerColorDefault var(--headerColor)
    .algolia-docsearch-suggestion
      borderColor $borderColorDefault var(--borderColor)
      padding 0
      .algolia-docsearch-suggestion--category-header
        padding 5px 10px
        margin-top 0
        bg $accentColorDefault var(--accentColor)
        text $textColorDefault var(--textColor)
        font-weight 600
        .algolia-docsearch-suggestion--highlight
          bg $arrowBgColorDefault var(--arrowBgColor)
      .algolia-docsearch-suggestion--wrapper
        padding 0
      .algolia-docsearch-suggestion--title
        font-weight 600
        margin-bottom 0
        text $textColorDefault var(--textColor)
      .algolia-docsearch-suggestion--subcategory-column
        vertical-align top
        padding 5px 7px 5px 5px
        borderColor $borderColorDefault var(--borderColor)
        bg $bodyBgColorDefault var(--bodyBgColor)
        &:after
          display none
      .algolia-docsearch-suggestion--subcategory-column-text
        text $textColorDefault var(--textColor)
    .algolia-docsearch-footer
      borderColor $borderColorDefault var(--borderColor)
    .ds-cursor .algolia-docsearch-suggestion--content
      bgColor $arrowBgColorDefault var(--arrowBgColor) true
      text $textColorDefault var(--textColor)

@media (min-width: $MQMobile)
  .algolia-search-wrapper
    .algolia-autocomplete
      .algolia-docsearch-suggestion
        .algolia-docsearch-suggestion--subcategory-column
          float none
          width 150px
          min-width 150px
          display table-cell
        .algolia-docsearch-suggestion--content
          float none
          display table-cell
          width 100%
          vertical-align top
        .ds-dropdown-menu
          min-width 515px !important

@media (max-width: $MQMobile)
  .algolia-search-wrapper
    .ds-dropdown-menu
      min-width calc(100vw - 4rem) !important
      max-width calc(100vw - 4rem) !important
    .algolia-docsearch-suggestion--wrapper
      padding 5px 7px 5px 5px !important
    .algolia-docsearch-suggestion--subcategory-column
      padding 0 !important
      bg $arrowBgColorDefault var(--arrowBgColor) true
    .algolia-docsearch-suggestion--subcategory-column-text:after
      content " > "
      font-size 10px
      line-height 14.4px
      display inline-block
      width 5px
      margin -3px 3px 0
      vertical-align middle

</style>
