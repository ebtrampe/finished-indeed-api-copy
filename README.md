# finished-indeed-api-copy
Copy of my project in CodeCommit

## Install serverless globally
Run `npm install -g serverless`

## Resolve dependecies
Run `npm install` or `yarn`

## Deploy changes to AWS
Run `serverless deploy` or `sls deploy`

## Remove or delete entire stack
Run `serverless remove` or `sls remove`

## Optional - Testing offline prior to deployment 
For this you need to install the plugin serverless-offline by running `npm install serverless-offline` or `yarn add serverless offline`
while in your project directory. Then add a plugins section in your serverless.yml file with serverless-offline as an item in the array:

```
plugins:
  - serverless-offline
```

Then in your command prompt or terminal, run `serverless offline` or `sls offline`. By default it starts a server with the 
address localhost:3000 which you can visit to test your endpoints, if any.

## Sample request and response data
The endpoints will look something like `https://your-api-gateway-endpoint.com/dev/jobs` and `https://your-api-gateway-endpoint.com/dev/jobs/CODE` where CODE can be DE, PT, or ES (since I'm scraping these country websites of Indeed).
Sample response data for PT:
```
{
  "Items": [
    {
      "matchedKeyWords": [
        "React",
        "node.js",
        "git"
      ],
      "jobUrl": "https://www.indeed.pt/rc/clk?jk=1a1af3d2c34665b3&fccid=b1661ed21b69d99b&vjs=3",
      "expires": 1581408543,
      "company": "XING PORTUGAL LDA.",
      "timestamp": 1581149343,
      "jobId": "1a1af3d2c34665b3",
      "applyUrl": "https://www.indeed.pt/rc/clk?jk=1a1af3d2c34665b3&from=vj&pos=bottom&sjdu=YmZE5d5THV8u75cuc0H6Y9vGQk-8yHtRcbTSk8xkSFOWn4x00UIZzcfrCBk-__c3kN0wkll9wDHc3mnStM4Hmg",
      "jobTitle": "Frontend Engineer Intern (m/f/x)",
      "country": "PT",
      "numMatches": 3
    },
    {
      "matchedKeyWords": [
        "GraphQL",
        "React"
      ],
      "jobUrl": "https://www.indeed.pt/rc/clk?jk=a1025b3f44e50d80&fccid=cd1929c6b824203f&vjs=3",
      "expires": 1581408543,
      "company": "DECSKILL",
      "timestamp": 1581149343,
      "jobId": "a1025b3f44e50d80",
      "applyUrl": "https://www.indeed.pt/rc/clk?jk=a1025b3f44e50d80&from=vj&pos=bottom&sjdu=YmZE5d5THV8u75cuc0H6Y9vGQk-8yHtRcbTSk8xkSFPXXYtOJLHjnbeFmOhbd7lFkN0wkll9wDHc3mnStM4Hmg",
      "jobTitle": "Node JS Developer",
      "country": "PT",
      "numMatches": 2
    },
    {
      "matchedKeyWords": [
        "React",
        "Node.js"
      ],
      "jobUrl": "https://www.indeed.pt/rc/clk?jk=e4ed9ebd91763624&fccid=09f7cefab40f6c96&vjs=3",
      "expires": 1581408544,
      "company": "Bee Engineering",
      "timestamp": 1581149343,
      "jobId": "e4ed9ebd91763624",
      "applyUrl": "https://www.indeed.pt/rc/clk?jk=e4ed9ebd91763624&from=vj&pos=bottom&sjdu=YmZE5d5THV8u75cuc0H6Y9vGQk-8yHtRcbTSk8xkSFOwNciJvgPTCosHePWlzSfkkN0wkll9wDHc3mnStM4Hmg",
      "jobTitle": "Front-End Developer",
      "country": "PT",
      "numMatches": 2
    },
    {
      "matchedKeyWords": [
        "git",
        "React",
        "node.js"
      ],
      "jobUrl": "https://www.indeed.pt/rc/clk?jk=dcefe4119df63a35&fccid=b1661ed21b69d99b&vjs=3",
      "expires": 1581408543,
      "company": "XING PORTUGAL LDA.",
      "timestamp": 1581149343,
      "jobId": "dcefe4119df63a35",
      "applyUrl": "https://www.indeed.pt/rc/clk?jk=dcefe4119df63a35&from=vj&pos=bottom&sjdu=YmZE5d5THV8u75cuc0H6Y9vGQk-8yHtRcbTSk8xkSFMu46TplwKjCAIquRfe1f-mkN0wkll9wDHc3mnStM4Hmg",
      "jobTitle": "Frontend Engineer (m/f/x)",
      "country": "PT",
      "numMatches": 3
    },
    {
      "matchedKeyWords": [
        "git",
        "React",
        "Node.js",
        "Git",
        "Docker"
      ],
      "jobUrl": "https://www.indeed.pt/rc/clk?jk=30b5d75b6ecc6866&fccid=584e1bab4c11c906&vjs=3",
      "expires": 1581408543,
      "company": "Imaginary Cloud",
      "timestamp": 1581149343,
      "jobId": "30b5d75b6ecc6866",
      "applyUrl": "https://www.indeed.pt/rc/clk?jk=30b5d75b6ecc6866&from=vj&pos=bottom&sjdu=YmZE5d5THV8u75cuc0H6Y9vGQk-8yHtRcbTSk8xkSFOoGBFZ5Sja4AXr-qqcCdcAkN0wkll9wDHc3mnStM4Hmg",
      "jobTitle": "Junior Software Developer",
      "country": "PT",
      "numMatches": 5
    },
    {
      "matchedKeyWords": [
        "React",
        "REACT",
        "node.js"
      ],
      "jobUrl": "https://www.indeed.pt/rc/clk?jk=0b357a76b7fa25a7&fccid=ee421a5b4c76e74e&vjs=3",
      "expires": 1581408544,
      "company": "KCS IT",
      "timestamp": 1581149344,
      "jobId": "0b357a76b7fa25a7",
      "applyUrl": "https://www.indeed.pt/rc/clk?jk=0b357a76b7fa25a7&from=vj&pos=bottom&sjdu=YmZE5d5THV8u75cuc0H6Y9vGQk-8yHtRcbTSk8xkSFOH7TYRmHMX48WShkTz8rjVkN0wkll9wDHc3mnStM4Hmg",
      "jobTitle": "Frontend React Developer",
      "country": "PT",
      "numMatches": 3
    },
    {
      "matchedKeyWords": [
        "git",
        "React",
        "Node.js",
        "Git",
        "Docker"
      ],
      "jobUrl": "https://www.indeed.pt/rc/clk?jk=b0248fb4e576d8b6&fccid=584e1bab4c11c906&vjs=3",
      "expires": 1581408544,
      "company": "Imaginary Cloud",
      "timestamp": 1581149344,
      "jobId": "b0248fb4e576d8b6",
      "applyUrl": "/promo/resume",
      "jobTitle": "Javascript Developer (React.js/Node.js)",
      "country": "PT",
      "numMatches": 5
    },
    {
      "matchedKeyWords": [
        "React",
        "Node.js",
        "GIT"
      ],
      "jobUrl": "https://www.indeed.pt/rc/clk?jk=490503ab62c82f5f&fccid=77087bd1709a8148&vjs=3",
      "expires": 1581408545,
      "company": "Michael Page",
      "timestamp": 1581149345,
      "jobId": "490503ab62c82f5f",
      "applyUrl": "https://www.indeed.pt/rc/clk?jk=490503ab62c82f5f&from=vj&pos=bottom&sjdu=YmZE5d5THV8u75cuc0H6Y9vGQk-8yHtRcbTSk8xkSFP37S_Gm5tKaSp_VFXJclsrkN0wkll9wDHc3mnStM4Hmg",
      "jobTitle": "Frontend Engineer",
      "country": "PT",
      "numMatches": 3
    },
    {
      "matchedKeyWords": [
        "React",
        "Node.js"
      ],
      "jobUrl": "https://www.indeed.pt/rc/clk?jk=e36be3e35c5d56f8&fccid=41dc36886fc8229f&vjs=3",
      "expires": 1581408545,
      "company": "Border Innovation",
      "timestamp": 1581149345,
      "jobId": "e36be3e35c5d56f8",
      "applyUrl": "https://www.indeed.pt/rc/clk?jk=e36be3e35c5d56f8&from=vj&pos=bottom&sjdu=YmZE5d5THV8u75cuc0H6Y9vGQk-8yHtRcbTSk8xkSFPNk2xqeQbtwsjE4pFLr3GYkN0wkll9wDHc3mnStM4Hmg",
      "jobTitle": "Junior Full Stack Developer",
      "country": "PT",
      "numMatches": 2
    },
    {
      "matchedKeyWords": [
        "git",
        "React",
        "Node.js"
      ],
      "jobUrl": "https://www.indeed.pt/rc/clk?jk=e042e329353c852f&fccid=bafccfe6cbf12d4e&vjs=3",
      "expires": 1581408545,
      "company": "YLD",
      "timestamp": 1581149345,
      "jobId": "e042e329353c852f",
      "applyUrl": "https://www.indeed.pt/rc/clk?jk=e042e329353c852f&from=vj&pos=bottom&sjdu=YmZE5d5THV8u75cuc0H6Y9vGQk-8yHtRcbTSk8xkSFPqanT7ESZXFjWO7hqiRR6SkN0wkll9wDHc3mnStM4Hmg",
      "jobTitle": "Software Engineer (React/Node)",
      "country": "PT",
      "numMatches": 3
    },
    {
      "matchedKeyWords": [
        "git"
      ],
      "jobUrl": "https://www.indeed.pt/rc/clk?jk=37469621d9d2e736&fccid=dcebc0842e5d7eb3&vjs=3",
      "expires": 1581414767,
      "company": "Novabase",
      "timestamp": 1581155567,
      "jobId": "37469621d9d2e736",
      "applyUrl": "https://www.indeed.pt/rc/clk?jk=37469621d9d2e736&from=vj&pos=bottom&sjdu=YmZE5d5THV8u75cuc0H6Y9vGQk-8yHtRcbTSk8xkSFOlmrHgJny6nwwPrqjgO2fSkN0wkll9wDHc3mnStM4Hmg",
      "jobTitle": ".NET Fullstack Developer",
      "country": "PT",
      "numMatches": 1
    },
    {
      "matchedKeyWords": [
        "git",
        "MongoDB"
      ],
      "jobUrl": "https://www.indeed.pt/rc/clk?jk=fdcda0c91d970351&fccid=272fa49473d8a449&vjs=3",
      "expires": 1581457967,
      "company": "Decode",
      "timestamp": 1581198767,
      "jobId": "fdcda0c91d970351",
      "applyUrl": "https://www.indeed.pt/rc/clk?jk=fdcda0c91d970351&from=vj&pos=bottom&sjdu=YmZE5d5THV8u75cuc0H6Y9vGQk-8yHtRcbTSk8xkSFMgfEk-jNeIsV4NPU_6DSblkN0wkll9wDHc3mnStM4Hmg",
      "jobTitle": ".NET Fullstack Developer",
      "country": "PT",
      "numMatches": 2
    },
    {
      "matchedKeyWords": [
        "GIT"
      ],
      "jobUrl": "https://www.indeed.pt/rc/clk?jk=6b580738b12c3fc9&fccid=b5fbdde39f9f5202&vjs=3",
      "expires": 1581587565,
      "company": "everis",
      "timestamp": 1581328365,
      "jobId": "6b580738b12c3fc9",
      "applyUrl": "https://www.indeed.pt/rc/clk?jk=6b580738b12c3fc9&from=vj&pos=bottom&sjdu=YmZE5d5THV8u75cuc0H6Y9vGQk-8yHtRcbTSk8xkSFN5Xyfsw9cpWGyZsi-6Zhv0kN0wkll9wDHc3mnStM4Hmg",
      "jobTitle": "Java FullStack Developer (m/f)",
      "country": "PT",
      "numMatches": 1
    },
    {
      "matchedKeyWords": [
        "Node.js"
      ],
      "jobUrl": "https://www.indeed.pt/rc/clk?jk=b45a5517cd99325d&fccid=f7aa4cbc87e7e5d7&vjs=3",
      "expires": 1581630766,
      "company": "Aubay",
      "timestamp": 1581371566,
      "jobId": "b45a5517cd99325d",
      "applyUrl": "https://www.indeed.pt/rc/clk?jk=b45a5517cd99325d&from=vj&pos=bottom&sjdu=YmZE5d5THV8u75cuc0H6Y9vGQk-8yHtRcbTSk8xkSFOIf5vP0tqBi5IJdprsCvJ4kN0wkll9wDHc3mnStM4Hmg",
      "jobTitle": "Angular Developer",
      "country": "PT",
      "numMatches": 1
    },
    {
      "matchedKeyWords": [
        "React"
      ],
      "jobUrl": "https://www.indeed.pt/rc/clk?jk=2fbea3d4bc9aa42e&fccid=dc0d4e2f112f064f&vjs=3",
      "expires": 1581630766,
      "company": "Red IT",
      "timestamp": 1581371566,
      "jobId": "2fbea3d4bc9aa42e",
      "applyUrl": "https://www.indeed.pt/rc/clk?jk=2fbea3d4bc9aa42e&from=vj&pos=bottom&sjdu=YmZE5d5THV8u75cuc0H6Y9vGQk-8yHtRcbTSk8xkSFNg7mtyFTZAon-8d8miQjLakN0wkll9wDHc3mnStM4Hmg",
      "jobTitle": "Full Stack Developer",
      "country": "PT",
      "numMatches": 1
    },
    {
      "matchedKeyWords": [
        "AWS",
        "Node.js",
        "React",
        "GIT"
      ],
      "jobUrl": "https://www.indeed.pt/rc/clk?jk=e03321cab53ffff8&fccid=ca2b244e2a15ca5c&vjs=3",
      "expires": 1581630767,
      "company": "Experis IT",
      "timestamp": 1581371567,
      "jobId": "e03321cab53ffff8",
      "applyUrl": "https://www.indeed.pt/rc/clk?jk=e03321cab53ffff8&from=vj&pos=bottom&sjdu=YmZE5d5THV8u75cuc0H6Y9vGQk-8yHtRcbTSk8xkSFMGqfrkvtSJHdgj3pGR-x8pkN0wkll9wDHc3mnStM4Hmg",
      "jobTitle": "FULLSTACK DEVELOPER",
      "country": "PT",
      "numMatches": 4
    },
    {
      "matchedKeyWords": [
        "MongoDB"
      ],
      "jobUrl": "https://www.indeed.pt/rc/clk?jk=33152be731dae9f9&fccid=eacb16892aef6c04&vjs=3",
      "expires": 1581630767,
      "company": "Omnibees",
      "timestamp": 1581371567,
      "jobId": "33152be731dae9f9",
      "applyUrl": "https://www.indeed.pt/rc/clk?jk=33152be731dae9f9&from=vj&pos=bottom&sjdu=YmZE5d5THV8u75cuc0H6Y9vGQk-8yHtRcbTSk8xkSFPeMD3tLxt-xtCxqFUW5LP6kN0wkll9wDHc3mnStM4Hmg",
      "jobTitle": "Fullstack Software Developer",
      "country": "PT",
      "numMatches": 1
    },
    {
      "matchedKeyWords": [
        "React"
      ],
      "jobUrl": "https://www.indeed.pt/rc/clk?jk=b478477c68220985&fccid=973eb9d5fbec7f3a&vjs=3",
      "expires": 1581630767,
      "company": "2Soft",
      "timestamp": 1581371567,
      "jobId": "b478477c68220985",
      "applyUrl": "https://www.indeed.pt/rc/clk?jk=b478477c68220985&from=vj&pos=bottom&sjdu=YmZE5d5THV8u75cuc0H6Y9vGQk-8yHtRcbTSk8xkSFNHvT1dfEiILot-b9IW-TqDkN0wkll9wDHc3mnStM4Hmg",
      "jobTitle": ".NET Fullstack Developer",
      "country": "PT",
      "numMatches": 1
    },
    {
      "matchedKeyWords": [
        "git"
      ],
      "jobUrl": "https://www.indeed.pt/rc/clk?jk=2e6ce1584527089e&fccid=de096516db571089&vjs=3",
      "expires": 1581630767,
      "company": "Egor",
      "timestamp": 1581371567,
      "jobId": "2e6ce1584527089e",
      "applyUrl": "https://www.indeed.pt/rc/clk?jk=2e6ce1584527089e&from=vj&pos=bottom&sjdu=YmZE5d5THV8u75cuc0H6Y9vGQk-8yHtRcbTSk8xkSFNArzRyOWhQdnoqRDuYA_tLkN0wkll9wDHc3mnStM4Hmg",
      "jobTitle": "Web Developer (m/f)",
      "country": "PT",
      "numMatches": 1
    },
    {
      "matchedKeyWords": [
        "React",
        "Node.js"
      ],
      "jobUrl": "https://www.indeed.pt/rc/clk?jk=c9245fdc739e8f93&fccid=f7aa4cbc87e7e5d7&vjs=3",
      "expires": 1581630768,
      "company": "Aubay",
      "timestamp": 1581371568,
      "jobId": "c9245fdc739e8f93",
      "applyUrl": "https://www.indeed.pt/rc/clk?jk=c9245fdc739e8f93&from=vj&pos=bottom&sjdu=YmZE5d5THV8u75cuc0H6Y9vGQk-8yHtRcbTSk8xkSFOf2S9AqsD4M-ekTZeTywaVkN0wkll9wDHc3mnStM4Hmg",
      "jobTitle": "React Developer",
      "country": "PT",
      "numMatches": 2
    },
    {
      "matchedKeyWords": [
        "AWS",
        "Git"
      ],
      "jobUrl": "https://www.indeed.pt/rc/clk?jk=9d8638434f705c9e&fccid=753376366828aaad&vjs=3",
      "expires": 1581630768,
      "company": "Web Summit",
      "timestamp": 1581371568,
      "jobId": "9d8638434f705c9e",
      "applyUrl": "/promo/resume",
      "jobTitle": "Senior Software Engineer",
      "country": "PT",
      "numMatches": 2
    }
  ],
  "Count": 21,
  "ScannedCount": 21
}
```
