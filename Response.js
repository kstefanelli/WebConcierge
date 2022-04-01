// eslint-disable-next-line import/no-anonymous-default-export
export default {
  kind: 'customsearch#search',
  url: {
    type: 'application/json',
    template:
      'https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json',
  },
  queries: {
    request: [
      {
        title: 'Google Custom Search - Hello World',
        totalResults: '1560000000',
        searchTerms: 'Hello World',
        count: 10,
        startIndex: 1,
        inputEncoding: 'utf8',
        outputEncoding: 'utf8',
        safe: 'off',
        cx: 'c8f7c133cae6860ed',
      },
    ],
    nextPage: [
      {
        title: 'Google Custom Search - Hello World',
        totalResults: '1560000000',
        searchTerms: 'Hello World',
        count: 10,
        startIndex: 11,
        inputEncoding: 'utf8',
        outputEncoding: 'utf8',
        safe: 'off',
        cx: 'c8f7c133cae6860ed',
      },
    ],
  },
  context: {
    title: 'Google',
  },
  searchInformation: {
    searchTime: 0.350228,
    formattedSearchTime: '0.35',
    totalResults: '1560000000',
    formattedTotalResults: '1,560,000,000',
  },
  items: [
    {
      kind: 'customsearch#result',
      title: 'Hello World',
      htmlTitle: '<b>Hello World</b>',
      link: 'https://www.helloworldstudio.org/',
      displayLink: 'www.helloworldstudio.org',
      snippet:
        'Hello World. Computer science enrichment programs taught by software engineers, AI architects, data scientists and educators on a mission to equip and ...',
      htmlSnippet:
        '<b>Hello World</b>. Computer science enrichment programs taught by software engineers, AI architects, data scientists and educators on a mission to equip and&nbsp;...',
      cacheId: '7GkArFo05XQJ',
      formattedUrl: 'https://www.helloworldstudio.org/',
      htmlFormattedUrl: 'https://www.<b>helloworlds</b>tudio.org/',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRerAM7Mn0MHrl4QSaqhgIsqvt_M8cnGG-DfrX-ap4pJzVmRfNjmHPVP-Oy',
            width: '275',
            height: '183',
          },
        ],
        metatags: [
          {
            'og:type': 'website',
            'twitter:title': 'Hello World',
            'twitter:card': 'summary',
            'og:site_name': 'Hello World',
            viewport: 'width=device-width, initial-scale=1',
            'twitter:url': 'https://www.helloworldstudio.org',
            'twitter:description':
              'Hello World   Computer science enrichment programs taught by software engineers, AI architects, data scientists and educators on a mission to equip and empower next generation innovators     Virtual Courses',
            'og:title': 'Hello World',
            'og:url': 'https://www.helloworldstudio.org',
            'og:description':
              'Hello World   Computer science enrichment programs taught by software engineers, AI architects, data scientists and educators on a mission to equip and empower next generation innovators     Virtual Courses',
          },
        ],
        cse_image: [
          {
            src: 'https://static1.squarespace.com/static/56f18ec601dbae5d39d46fe8/t/5a7626ff24a69434ae3b27fa/1517692671764/HWS-4260.jpg',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: '"Hello, World!" program - Wikipedia',
      htmlTitle: '&quot;<b>Hello</b>, <b>World</b>!&quot; program - Wikipedia',
      link: 'https://en.wikipedia.org/wiki/%22Hello,_World!%22_program',
      displayLink: 'en.wikipedia.org',
      snippet:
        'A "Hello, World!" program is generally a computer program that outputs or displays the message "Hello, World!". This program is very simple to write in many ...',
      htmlSnippet:
        'A &quot;<b>Hello</b>, <b>World</b>!&quot; program is generally a computer program that outputs or displays the message &quot;<b>Hello</b>, <b>World</b>!&quot;. This program is very simple to write in many&nbsp;...',
      cacheId: 'UInCiDfJyeUJ',
      formattedUrl: 'https://en.wikipedia.org/wiki/%22Hello,_World!%22_program',
      htmlFormattedUrl: 'https://en.wikipedia.org/wiki/%22<b>Hello</b>,_<b>World</b>!%22_program',
      pagemap: {
        metatags: [
          {
            referrer: 'origin',
            'og:type': 'website',
            'og:title': '"Hello, World!" program - Wikipedia',
            'format-detection': 'telephone=no',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Hello World Modern Mercantile & Gifts',
      htmlTitle: '<b>Hello World</b> Modern Mercantile &amp; Gifts',
      link: 'https://shophelloworld.com/',
      displayLink: 'shophelloworld.com',
      snippet:
        'Find a gift for everyone you know at one locally owned business. Unique jewelry, cute accessories, and a plethora of home decor are just some of what you ...',
      htmlSnippet:
        'Find a gift for everyone you know at one locally owned business. Unique jewelry, cute accessories, and a plethora of home decor are just some of what you&nbsp;...',
      cacheId: 'nXxyhCa9L0sJ',
      formattedUrl: 'https://shophelloworld.com/',
      htmlFormattedUrl: 'https://shop<b>helloworld</b>.com/',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSSgSay1xDQ6DunnjcfYtha4VNLVcTz_UdJ-UQZwZ48jVjNwTSoHUfaz48',
            width: '260',
            height: '130',
          },
        ],
        organization: [
          {
            name: 'Hello World',
            logo: 'https://cdn.shopify.com/s/files/1/0043/9642/files/receiptlogo03_260x.png?v=1609781350',
            url: 'https://shophelloworld.com/',
          },
        ],
        metatags: [
          {
            'theme-color': '#12ce8c',
            'og:type': 'website',
            'twitter:card': 'summary_large_image',
            'twitter:title': 'Hello World Modern Mercantile & Gifts',
            'og:site_name': 'Hello World',
            viewport: 'width=device-width,initial-scale=1.0',
            'twitter:description':
              'Find a gift for everyone you know at one locally owned business. Unique jewelry, cute accessories, and a plethora of home decor are just some of what you can expect to discover. Explore this adorable Philly boutique in-store and online!',
            'shopify-digital-wallet': '/439642/digital_wallets/dialog',
            'og:title': 'Hello World Modern Mercantile & Gifts',
            'shopify-checkout-api-token': '5725ca2823da741bd6feea4776d60b94',
            'og:url': 'https://shophelloworld.com/',
            'og:description':
              'Find a gift for everyone you know at one locally owned business. Unique jewelry, cute accessories, and a plethora of home decor are just some of what you can expect to discover. Explore this adorable Philly boutique in-store and online!',
          },
        ],
        cse_image: [
          {
            src: 'https://cdn.shopify.com/s/files/1/0043/9642/files/receiptlogo03_260x.png?v=1609781350',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Hello World | Code.org',
      htmlTitle: '<b>Hello World</b> | Code.org',
      link: 'https://code.org/helloworld',
      displayLink: 'code.org',
      snippet:
        'In Computer Science 101, the first program many students create is a simple one that outputs an iconic line of text: "Hello World!" Say hello to the world ...',
      htmlSnippet:
        'In Computer Science 101, the first program many students create is a simple one that outputs an iconic line of text: &quot;<b>Hello World</b>!&quot; Say hello to the world&nbsp;...',
      cacheId: 'TWg46TeXY_8J',
      formattedUrl: 'https://code.org/helloworld',
      htmlFormattedUrl: 'https://code.org/<b>helloworld</b>',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT3ISD0H1ReEh2CCEWMdDQAeOtVTzO42YiWocPWa5Jnqq6z8_BYniiBtEk',
            width: '310',
            height: '163',
          },
        ],
        metatags: [
          {
            'og:image': 'https://code.org/images/social-media/helloworld-og-image-1200x630.png',
            'og:type': 'article',
            'twitter:title': 'Hello World!',
            'og:image:width': '1200',
            'twitter:card': 'summary_large_image',
            'og:site_name': 'Code.org',
            'og:title': 'Hello World!',
            'og:image:height': '630',
            'og:description':
              'Choose from fun themes to code interactive characters in a world you create in this Hour of Code activity!',
            'article:publisher': 'https://www.facebook.com/Code.org',
            'twitter:image:src':
              'https://code.org/images/social-media/helloworld-og-image-1200x630.png',
            'fb:app_id': '500177453358606',
            viewport:
              'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no',
            'twitter:description':
              'Choose from fun themes to code interactive characters in a world you create in this Hour of Code activity',
            'og:url': 'https://code.org/helloworld',
          },
        ],
        cse_image: [
          {
            src: 'https://code.org/images/social-media/helloworld-og-image-1200x630.png',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: "HelloWorld - Digital promotions & loyalty programs for the world's ...",
      htmlTitle:
        '<b>HelloWorld</b> - Digital promotions &amp; loyalty programs for the world&#39;s ...',
      link: 'http://www.helloworld.com/',
      displayLink: 'www.helloworld.com',
      snippet:
        'HelloWorld is Now Proud to be Known as Merkle. create moments of value that drive people closer to your brand. Digital promotions and loyalty solutions for ...',
      htmlSnippet:
        '<b>HelloWorld</b> is Now Proud to be Known as Merkle. create moments of value that drive people closer to your brand. Digital promotions and loyalty solutions for&nbsp;...',
      cacheId: 'QaCp7ECVKlQJ',
      formattedUrl: 'www.helloworld.com/',
      htmlFormattedUrl: 'www.<b>helloworld</b>.com/',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ_bPJkm8amATzzqbYibvvJvm8yqrYpbCp6MRE7ynUTkC6zrLkxrUTs4bI',
            width: '197',
            height: '256',
          },
        ],
        WebPage: [
          {
            name: "HelloWorld - Digital promotions & loyalty programs for the world's best brands",
          },
        ],
        metatags: [
          {
            'msapplication-tilecolor': '#ffffff',
            'theme-color': '#ffffff',
            handheldfriendly: 'true',
            viewport: 'width=device-width, initial-scale=1.0',
            'apple-mobile-web-app-capable': 'yes',
            mobileoptimized: 'width',
          },
        ],
        cse_image: [
          {
            src: 'http://www.helloworld.com/sites/default/files/2020-01/homepage-carousel-merkle-mobile.jpg',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Hello World - GitHub Docs',
      htmlTitle: '<b>Hello World</b> - GitHub Docs',
      link: 'https://docs.github.com/en/get-started/quickstart/hello-world',
      displayLink: 'docs.github.com',
      snippet:
        "You'll create your own Hello World repository and learn GitHub's pull request workflow, a popular way to create and review code. In this quickstart guide, ...",
      htmlSnippet:
        'You&#39;ll create your own <b>Hello World</b> repository and learn GitHub&#39;s pull request workflow, a popular way to create and review code. In this quickstart guide,&nbsp;...',
      cacheId: 'm64ap4KkCeoJ',
      formattedUrl: 'https://docs.github.com/en/get-started/quickstart/hello-world',
      htmlFormattedUrl:
        'https://docs.github.com/en/get-started/quickstart/<b>hello</b>-<b>world</b>',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCwTsxFVHqKiYpNvIA-GSY8M1EYwBczxJKHBwY_QpZi-vlCiuZisBYQKI',
            width: '225',
            height: '225',
          },
        ],
        metatags: [
          {
            'page-document-type': 'article',
            'og:image': 'https://github.githubassets.com/images/modules/open_graph/github-logo.png',
            'og:type': 'article',
            'og:site_name': 'GitHub Docs',
            'og:title': 'Hello World - GitHub Docs',
            'path-article': 'get-started/quickstart/hello-world',
            'path-version': 'free-pro-team@latest',
            'path-product': 'get-started',
            'next-head-count': '26',
            'path-language': 'en',
            viewport: 'width=device-width, initial-scale=1',
            'page-type': 'quick_start',
            'csrf-token': 'erA2U5V6-NYqCQBbkodu_uMMHVLx-X8cMeOw',
            'og:url':
              'http://ghdocs-prod.azurewebsites.net:80/en/get-started/quickstart/hello-world',
            status: '200',
          },
        ],
        cse_image: [
          {
            src: 'https://github.githubassets.com/images/modules/open_graph/github-logo.png',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Hello World – React',
      htmlTitle: '<b>Hello World</b> – React',
      link: 'https://reactjs.org/docs/hello-world.html',
      displayLink: 'reactjs.org',
      snippet:
        "Hello World. The smallest React example looks like this: ReactDOM .createRoot(document.getElementById('root')) .render(<h1>Hello, world!</h1>);.",
      htmlSnippet:
        '<b>Hello World</b>. The smallest React example looks like this: ReactDOM .createRoot(document.getElementById(&#39;root&#39;)) .render(&lt;h1&gt;<b>Hello</b>, <b>world</b>!&lt;/h1&gt;);.',
      cacheId: 'We7zpakyqG8J',
      formattedUrl: 'https://reactjs.org/docs/hello-world.html',
      htmlFormattedUrl: 'https://reactjs.org/docs/<b>hello</b>-<b>world</b>.html',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRfoO6h2pHfrElGwudOq05MGR-ESjebbBJaWuKIJNz6Ut3_SBrPloUxWYM',
            width: '310',
            height: '163',
          },
        ],
        metatags: [
          {
            'og:image': 'https://reactjs.org/logo-og.png',
            'og:type': 'article',
            'fb:app_id': '623268441017527',
            'theme-color': '#20232a',
            viewport: 'width=device-width, initial-scale=1.0',
            'apple-mobile-web-app-capable': 'yes',
            'apple-mobile-web-app-title': 'React',
            'og:title': 'Hello World – React',
            'og:url': 'https://reactjs.org/docs/hello-world.html',
            'og:description': 'A JavaScript library for building user interfaces',
          },
        ],
        cse_image: [
          {
            src: 'https://reactjs.org/logo-og.png',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Express "Hello World" example',
      htmlTitle: 'Express &quot;<b>Hello World</b>&quot; example',
      link: 'https://expressjs.com/en/starter/hello-world.html',
      displayLink: 'expressjs.com',
      snippet:
        "Hello world example. Embedded below is essentially the simplest Express app you can create. It is a single file app — not what you'd get if you use the ...",
      htmlSnippet:
        '<b>Hello world</b> example. Embedded below is essentially the simplest Express app you can create. It is a single file app — not what you&#39;d get if you use the&nbsp;...',
      cacheId: 'Ag5WPLoY5PIJ',
      formattedUrl: 'https://expressjs.com/en/starter/hello-world.html',
      htmlFormattedUrl: 'https://expressjs.com/en/starter/<b>hello</b>-<b>world</b>.html',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQkDB2aWrpzUyql-VCFAdpHstna-_dqmQ845_hD8YjdljTeTUdoXGUFEYMo',
            width: '374',
            height: '135',
          },
        ],
        metatags: [
          {
            'og:image': 'https://expressjs.com/images/express-facebook-share.png',
            viewport: 'width=device-width, initial-scale=1',
          },
        ],
        cse_image: [
          {
            src: 'https://expressjs.com/images/express-facebook-share.png',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Hello World',
      htmlTitle: '<b>Hello World</b>',
      link: 'https://helloworld.raspberrypi.org/',
      displayLink: 'helloworld.raspberrypi.org',
      snippet:
        'Hello World issue 18. Cybersecurity threats are increasing and changing all the time; teaching students how to protect themselves is vital.',
      htmlSnippet:
        '<b>Hello World</b> issue 18. Cybersecurity threats are increasing and changing all the time; teaching students how to protect themselves is vital.',
      cacheId: 'POS2s4YXPC0J',
      formattedUrl: 'https://helloworld.raspberrypi.org/',
      htmlFormattedUrl: 'https://<b>helloworld</b>.raspberrypi.org/',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT6uWbQPc7zgMVmvAPfHp-LaKax82KnBVXr4WGxhhrwZ74yffcH_lELN-Y',
            width: '225',
            height: '225',
          },
        ],
        metatags: [
          {
            'og:image':
              'https://helloworld.raspberrypi.org/assets/helloworld/meta_image-1e940b77afe31f357ca27e518a38bec065ed86531f12dec73292828707b0ad62.png',
            'twitter:card': 'summary_large_image',
            'twitter:title': 'Hello World',
            'og:type': 'website',
            'og:site_name': 'Hello World',
            'og:title': 'Hello World',
            'csrf-param': 'authenticity_token',
            'og:description': 'For Computing and Digital Making Educators',
            'twitter:creator': '@HelloWorld_Edu',
            'twitter:image':
              'https://helloworld.raspberrypi.org/assets/helloworld/meta_image-1e940b77afe31f357ca27e518a38bec065ed86531f12dec73292828707b0ad62.png',
            'twitter:site': '@HelloWorld_Edu',
            viewport: 'width=device-width, initial-scale=1',
            'csrf-token':
              'JNqcpQ4vzR10wfTB0+gAcAaAySBKlOXSOpf7tRgB6C89l5+XV0mjBzZ/wzAGA+h93xVlLn+Cl4+R03i/CY17/g==',
            'og:locale': 'en_GB',
            'og:url': 'https://helloworld.raspberrypi.org/',
          },
        ],
        cse_image: [
          {
            src: 'https://helloworld.raspberrypi.org/assets/helloworld/meta_image-1e940b77afe31f357ca27e518a38bec065ed86531f12dec73292828707b0ad62.png',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Check out Hello World',
      htmlTitle: 'Check out <b>Hello World</b>',
      link: 'https://www.helloworldnetwork.org/',
      displayLink: 'www.helloworldnetwork.org',
      snippet:
        'Hello World is a non-profit out to notice, develop, and back underrepresented Gen Z talent who want to do good in the world.',
      htmlSnippet:
        '<b>Hello World</b> is a non-profit out to notice, develop, and back underrepresented Gen Z talent who want to do good in the world.',
      cacheId: 'GkX5CdjlGssJ',
      formattedUrl: 'https://www.helloworldnetwork.org/',
      htmlFormattedUrl: 'https://www.<b>helloworld</b>network.org/',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRqq6c0ngZJAp-TZE_jLhaFTAdPIEQ7uEdn0cH196jkAP7rt4wLSEXVlpQ',
            width: '387',
            height: '130',
          },
        ],
        metatags: [
          {
            viewport: 'width=device-width, initial-scale=1',
          },
        ],
        cse_image: [
          {
            src: 'https://assets.website-files.com/5f84a77b1e3bbc07d8557244/5f84a77b1e3bbc769d557283_SCRATCHOUT%20Hero.svg',
          },
        ],
      },
    },
  ],
};
