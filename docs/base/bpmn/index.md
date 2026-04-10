## 1、安装bpmn-js
```bash
yarn add bpmn-js
```
## 2、安装汉化依赖包 bpmn-js-i18n-zh
```bash
yarn add bpmn-js-i18n-zh
```
### 2-1、汉化文件 Translate.js
```js
// custom translation module
import bpmn from 'bpmn-js-i18n-zh/lib/bpmn-js';
import properties from 'bpmn-js-i18n-zh/lib/properties-panel';
import camunda from 'bpmn-js-i18n-zh/lib/camunda-properties-panel';
import zeebe from 'bpmn-js-i18n-zh/lib/zeebe-properties-panel';

const zhCN = {
  ...bpmn,
  ...properties,
  ...camunda,
  ...zeebe
  // 可以在这里加上需要修改的部分内容
};

export function customTranslate (template, replacements) {
  replacements = replacements || {};

  // Translate
  template = zhCN[template] || template;

  // Replace
  return template.replace(/{([^}]+)}/g, function (_, key) {
    return replacements[key] || '{' + key + '}';
  });
}

export default {
  translate: ['value', customTranslate]
};

```
## 3、camunda.json文件
```json

{
  "name": "Camunda",
  "uri": "http://camunda.org/schema/1.0/bpmn",
  "prefix": "camunda",
  "xml": {
    "tagAlias": "lowerCase"
  },
  "associations": [],
  "types": [
    {
      "name": "Definitions",
      "isAbstract": true,
      "extends": [
        "bpmn:Definitions"
      ],
      "properties": [
        {
          "name": "diagramRelationId",
          "isAttr": true,
          "type": "String"
        }
      ]
    },
    {
      "name": "InOutBinding",
      "superClass": [
        "Element"
      ],
      "isAbstract": true,
      "properties": [
        {
          "name": "source",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "sourceExpression",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "target",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "businessKey",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "local",
          "isAttr": true,
          "type": "Boolean",
          "default": false
        },
        {
          "name": "variables",
          "isAttr": true,
          "type": "String"
        }
      ]
    },
    {
      "name": "In",
      "superClass": [
        "InOutBinding"
      ],
      "meta": {
        "allowedIn": [
          "bpmn:CallActivity"
        ]
      }
    },
    {
      "name": "Out",
      "superClass": [
        "InOutBinding"
      ],
      "meta": {
        "allowedIn": [
          "bpmn:CallActivity"
        ]
      }
    },
    {
      "name": "AsyncCapable",
      "isAbstract": true,
      "extends": [
        "bpmn:Activity",
        "bpmn:Gateway",
        "bpmn:Event"
      ],
      "properties": [
        {
          "name": "async",
          "isAttr": true,
          "type": "Boolean",
          "default": false
        },
        {
          "name": "asyncBefore",
          "isAttr": true,
          "type": "Boolean",
          "default": false
        },
        {
          "name": "asyncAfter",
          "isAttr": true,
          "type": "Boolean",
          "default": false
        },
        {
          "name": "exclusive",
          "isAttr": true,
          "type": "Boolean",
          "default": true
        }
      ]
    },
    {
      "name": "JobPriorized",
      "isAbstract": true,
      "extends": [
        "bpmn:Process",
        "camunda:AsyncCapable"
      ],
      "properties": [
        {
          "name": "jobPriority",
          "isAttr": true,
          "type": "String"
        }
      ]
    },
    {
      "name": "SignalEventDefinition",
      "isAbstract": true,
      "extends": [
        "bpmn:SignalEventDefinition"
      ],
      "properties": [
        {
          "name": "async",
          "isAttr": true,
          "type": "Boolean",
          "default": false
        }
      ]
    },
    {
      "name": "ErrorEventDefinition",
      "isAbstract": true,
      "extends": [
        "bpmn:ErrorEventDefinition"
      ],
      "properties": [
        {
          "name": "errorCodeVariable",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "errorMessageVariable",
          "isAttr": true,
          "type": "String"
        }
      ]
    },
    {
      "name": "Error",
      "isAbstract": true,
      "extends": [
        "bpmn:Error"
      ],
      "properties": [
        {
          "name": "camunda:errorMessage",
          "isAttr": true,
          "type": "String"
        }
      ]
    },
    {
      "name": "PotentialStarter",
      "superClass": [
        "Element"
      ],
      "properties": [
        {
          "name": "resourceAssignmentExpression",
          "type": "bpmn:ResourceAssignmentExpression"
        }
      ]
    },
    {
      "name": "FormSupported",
      "isAbstract": true,
      "extends": [
        "bpmn:StartEvent",
        "bpmn:UserTask"
      ],
      "properties": [
        {
          "name": "formHandlerClass",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "formKey",
          "isAttr": true,
          "type": "String"
        }
      ]
    },
    {
      "name": "TemplateSupported",
      "isAbstract": true,
      "extends": [
        "bpmn:Process",
        "bpmn:FlowElement"
      ],
      "properties": [
        {
          "name": "modelerTemplate",
          "isAttr": true,
          "type": "String"
        }
      ]
    },
    {
      "name": "Initiator",
      "isAbstract": true,
      "extends": [ "bpmn:StartEvent" ],
      "properties": [
        {
          "name": "initiator",
          "isAttr": true,
          "type": "String"
        }
      ]
    },
    {
      "name": "ScriptTask",
      "isAbstract": true,
      "extends": [
        "bpmn:ScriptTask"
      ],
      "properties": [
        {
          "name": "resultVariable",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "resource",
          "isAttr": true,
          "type": "String"
        }
      ]
    },
    {
      "name": "Process",
      "isAbstract": true,
      "extends": [
        "bpmn:Process"
      ],
      "properties": [
        {
          "name": "candidateStarterGroups",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "candidateStarterUsers",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "versionTag",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "historyTimeToLive",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "isStartableInTasklist",
          "isAttr": true,
          "type": "Boolean",
          "default": true
        }
      ]
    },
    {
      "name": "EscalationEventDefinition",
      "isAbstract": true,
      "extends": [
        "bpmn:EscalationEventDefinition"
      ],
      "properties": [
        {
          "name": "escalationCodeVariable",
          "isAttr": true,
          "type": "String"
        }
      ]
    },
    {
      "name": "FormalExpression",
      "isAbstract": true,
      "extends": [
        "bpmn:FormalExpression"
      ],
      "properties": [
        {
          "name": "resource",
          "isAttr": true,
          "type": "String"
        }
      ]
    },
    {
      "name": "Assignable",
      "extends": [ "bpmn:UserTask" ],
      "properties": [
        {
          "name": "assignee",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "candidateUsers",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "candidateGroups",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "dueDate",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "followUpDate",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "priority",
          "isAttr": true,
          "type": "String"
        }
      ]
    },
    {
      "name": "CallActivity",
      "extends": [ "bpmn:CallActivity" ],
      "properties": [
        {
          "name": "calledElementBinding",
          "isAttr": true,
          "type": "String",
          "default": "latest"
        },
        {
          "name": "calledElementVersion",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "calledElementVersionTag",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "calledElementTenantId",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "caseRef",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "caseBinding",
          "isAttr": true,
          "type": "String",
          "default": "latest"
        },
        {
          "name": "caseVersion",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "caseTenantId",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "variableMappingClass",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "variableMappingDelegateExpression",
          "isAttr": true,
          "type": "String"
        }
      ]
    },
    {
      "name": "ServiceTaskLike",
      "extends": [
        "bpmn:ServiceTask",
        "bpmn:BusinessRuleTask",
        "bpmn:SendTask",
        "bpmn:MessageEventDefinition"
      ],
      "properties": [
        {
          "name": "expression",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "class",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "delegateExpression",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "resultVariable",
          "isAttr": true,
          "type": "String"
        }
      ]
    },
    {
      "name": "DmnCapable",
      "extends": [
        "bpmn:BusinessRuleTask"
      ],
      "properties": [
        {
          "name": "decisionRef",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "decisionRefBinding",
          "isAttr": true,
          "type": "String",
          "default": "latest"
        },
        {
          "name": "decisionRefVersion",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "mapDecisionResult",
          "isAttr": true,
          "type": "String",
          "default": "resultList"
        },
        {
          "name": "decisionRefTenantId",
          "isAttr": true,
          "type": "String"
        }
      ]
    },
    {
      "name": "ExternalCapable",
      "extends": [
        "camunda:ServiceTaskLike"
      ],
      "properties": [
        {
          "name": "type",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "topic",
          "isAttr": true,
          "type": "String"
        }
      ]
    },
    {
      "name": "TaskPriorized",
      "extends": [
        "bpmn:Process",
        "camunda:ExternalCapable"
      ],
      "properties": [
        {
          "name": "taskPriority",
          "isAttr": true,
          "type": "String"
        }
      ]
    },
    {
      "name": "Properties",
      "superClass": [
        "Element"
      ],
      "meta": {
        "allowedIn": [ "*" ]
      },
      "properties": [
        {
          "name": "values",
          "type": "Property",
          "isMany": true
        }
      ]
    },
    {
      "name": "Property",
      "superClass": [
        "Element"
      ],
      "properties": [
        {
          "name": "id",
          "type": "String",
          "isAttr": true
        },
        {
          "name": "name",
          "type": "String",
          "isAttr": true
        },
        {
          "name": "value",
          "type": "String",
          "isAttr": true
        }
      ]
    },
    {
      "name": "Connector",
      "superClass": [
        "Element"
      ],
      "meta": {
        "allowedIn": [
          "camunda:ServiceTaskLike"
        ]
      },
      "properties": [
        {
          "name": "inputOutput",
          "type": "InputOutput"
        },
        {
          "name": "connectorId",
          "type": "String"
        }
      ]
    },
    {
      "name": "InputOutput",
      "superClass": [
        "Element"
      ],
      "meta": {
        "allowedIn": [
          "bpmn:FlowNode",
          "camunda:Connector"
        ]
      },
      "properties": [
        {
          "name": "inputOutput",
          "type": "InputOutput"
        },
        {
          "name": "connectorId",
          "type": "String"
        },
        {
          "name": "inputParameters",
          "isMany": true,
          "type": "InputParameter"
        },
        {
          "name": "outputParameters",
          "isMany": true,
          "type": "OutputParameter"
        }
      ]
    },
    {
      "name": "InputOutputParameter",
      "properties": [
        {
          "name": "name",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "value",
          "isBody": true,
          "type": "String"
        },
        {
          "name": "definition",
          "type": "InputOutputParameterDefinition"
        }
      ]
    },
    {
      "name": "InputOutputParameterDefinition",
      "isAbstract": true
    },
    {
      "name": "List",
      "superClass": [ "InputOutputParameterDefinition" ],
      "properties": [
        {
          "name": "items",
          "isMany": true,
          "type": "InputOutputParameterDefinition"
        }
      ]
    },
    {
      "name": "Map",
      "superClass": [ "InputOutputParameterDefinition" ],
      "properties": [
        {
          "name": "entries",
          "isMany": true,
          "type": "Entry"
        }
      ]
    },
    {
      "name": "Entry",
      "properties": [
        {
          "name": "key",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "value",
          "isBody": true,
          "type": "String"
        },
        {
          "name": "definition",
          "type": "InputOutputParameterDefinition"
        }
      ]
    },
    {
      "name": "Value",
      "superClass": [
        "InputOutputParameterDefinition"
      ],
      "properties": [
        {
          "name": "id",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "name",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "value",
          "isBody": true,
          "type": "String"
        }
      ]
    },
    {
      "name": "Script",
      "superClass": [ "InputOutputParameterDefinition" ],
      "properties": [
        {
          "name": "scriptFormat",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "resource",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "value",
          "isBody": true,
          "type": "String"
        }
      ]
    },
    {
      "name": "Field",
      "superClass": [ "Element" ],
      "meta": {
        "allowedIn": [
          "camunda:ServiceTaskLike",
          "camunda:ExecutionListener",
          "camunda:TaskListener"
        ]
      },
      "properties": [
        {
          "name": "name",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "expression",
          "type": "String"
        },
        {
          "name": "stringValue",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "string",
          "type": "String"
        }
      ]
    },
    {
      "name": "InputParameter",
      "superClass": [ "InputOutputParameter" ]
    },
    {
      "name": "OutputParameter",
      "superClass": [ "InputOutputParameter" ]
    },
    {
      "name": "Collectable",
      "isAbstract": true,
      "extends": [ "bpmn:MultiInstanceLoopCharacteristics" ],
      "superClass": [ "camunda:AsyncCapable" ],
      "properties": [
        {
          "name": "collection",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "elementVariable",
          "isAttr": true,
          "type": "String"
        }
      ]
    },
    {
      "name": "FailedJobRetryTimeCycle",
      "superClass": [ "Element" ],
      "meta": {
        "allowedIn": [
          "camunda:AsyncCapable",
          "bpmn:MultiInstanceLoopCharacteristics"
        ]
      },
      "properties": [
        {
          "name": "body",
          "isBody": true,
          "type": "String"
        }
      ]
    },
    {
      "name": "ExecutionListener",
      "superClass": [ "Element" ],
      "meta": {
        "allowedIn": [
          "bpmn:Task",
          "bpmn:ServiceTask",
          "bpmn:UserTask",
          "bpmn:BusinessRuleTask",
          "bpmn:ScriptTask",
          "bpmn:ReceiveTask",
          "bpmn:ManualTask",
          "bpmn:ExclusiveGateway",
          "bpmn:SequenceFlow",
          "bpmn:ParallelGateway",
          "bpmn:InclusiveGateway",
          "bpmn:EventBasedGateway",
          "bpmn:StartEvent",
          "bpmn:IntermediateCatchEvent",
          "bpmn:IntermediateThrowEvent",
          "bpmn:EndEvent",
          "bpmn:BoundaryEvent",
          "bpmn:CallActivity",
          "bpmn:SubProcess",
          "bpmn:Process"
        ]
      },
      "properties": [
        {
          "name": "expression",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "class",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "delegateExpression",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "event",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "script",
          "type": "Script"
        },
        {
          "name": "fields",
          "type": "Field",
          "isMany": true
        }
      ]
    },
    {
      "name": "TaskListener",
      "superClass": [ "Element" ],
      "meta": {
        "allowedIn": [
          "bpmn:UserTask"
        ]
      },
      "properties": [
        {
          "name": "expression",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "class",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "delegateExpression",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "event",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "script",
          "type": "Script"
        },
        {
          "name": "fields",
          "type": "Field",
          "isMany": true
        },
        {
          "name": "id",
          "type": "String",
          "isAttr": true
        },
        {
          "name": "eventDefinitions",
          "type": "bpmn:TimerEventDefinition",
          "isMany": true
        }
      ]
    },
    {
      "name": "FormProperty",
      "superClass": [ "Element" ],
      "meta": {
        "allowedIn": [
          "bpmn:StartEvent",
          "bpmn:UserTask"
        ]
      },
      "properties": [
        {
          "name": "id",
          "type": "String",
          "isAttr": true
        },
        {
          "name": "name",
          "type": "String",
          "isAttr": true
        },
        {
          "name": "type",
          "type": "String",
          "isAttr": true
        },
        {
          "name": "required",
          "type": "String",
          "isAttr": true
        },
        {
          "name": "readable",
          "type": "String",
          "isAttr": true
        },
        {
          "name": "writable",
          "type": "String",
          "isAttr": true
        },
        {
          "name": "variable",
          "type": "String",
          "isAttr": true
        },
        {
          "name": "expression",
          "type": "String",
          "isAttr": true
        },
        {
          "name": "datePattern",
          "type": "String",
          "isAttr": true
        },
        {
          "name": "default",
          "type": "String",
          "isAttr": true
        },
        {
          "name": "values",
          "type": "Value",
          "isMany": true
        }
      ]
    },
    {
      "name": "FormData",
      "superClass": [ "Element" ],
      "meta": {
        "allowedIn": [
          "bpmn:StartEvent",
          "bpmn:UserTask"
        ]
      },
      "properties": [
        {
          "name": "fields",
          "type": "FormField",
          "isMany": true
        },
        {
          "name": "businessKey",
          "type": "String",
          "isAttr": true
        }
      ]
    },
    {
      "name": "FormField",
      "superClass": [ "Element" ],
      "properties": [
        {
          "name": "id",
          "type": "String",
          "isAttr": true
        },
        {
          "name": "label",
          "type": "String",
          "isAttr": true
        },
        {
          "name": "type",
          "type": "String",
          "isAttr": true
        },
        {
          "name": "datePattern",
          "type": "String",
          "isAttr": true
        },
        {
          "name": "defaultValue",
          "type": "String",
          "isAttr": true
        },
        {
          "name": "properties",
          "type": "Properties"
        },
        {
          "name": "validation",
          "type": "Validation"
        },
        {
          "name": "values",
          "type": "Value",
          "isMany": true
        }
      ]
    },
    {
      "name": "Validation",
      "superClass": [ "Element" ],
      "properties": [
        {
          "name": "constraints",
          "type": "Constraint",
          "isMany": true
        }
      ]
    },
    {
      "name": "Constraint",
      "superClass": [ "Element" ],
      "properties": [
        {
          "name": "name",
          "type": "String",
          "isAttr": true
        },
        {
          "name": "config",
          "type": "String",
          "isAttr": true
        }
      ]
    },
    {
      "name": "ConditionalEventDefinition",
      "isAbstract": true,
      "extends": [
        "bpmn:ConditionalEventDefinition"
      ],
      "properties": [
        {
          "name": "variableName",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "variableEvent",
          "isAttr": true,
          "type": "String"
        }
      ]
    }
  ],
  "emumerations": [ ]
}

```

## 4、示例
```vue
<template>
  <div class="containerBox">
    <el-button-group>
      <el-button type="primary" size="mini" @click="handleUndo">后退</el-button>
      <el-button type="success" size="mini" @click="handleRedo">前进</el-button>
      <el-button type="warning" size="mini" @click="handleDownload">下载</el-button>
      <el-upload
          style="display: inline-block;"
          :file-list="fileList"
          class="upload-demo"
          action=""
          :auto-upload="false"
          :show-file-list="false"
          :on-change="handleOnchangeFile"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
      >
      <el-button type="danger" size="mini">导入</el-button>
      </el-upload>
      <el-button type="primary" size="mini"  @click="saveModel">保存流程</el-button>
      <el-button type="success" size="mini"  @click="deployModel">部署流程</el-button>
    </el-button-group>
    <el-input v-model="modelName" placeholder="流程名称" style="width:200px;margin:0 10px" />
    <el-input v-model="modelKey" placeholder="流程标识" style="width:200px" />
    <div id="container"></div>
  </div>
</template>
<script>
import BpmnModeler from 'bpmn-js/lib/Modeler';
import camundaExtension from './camunda';
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';
import flowableApi from '@/api/flowable';

import Translate from './Translate';

export default {
  name: 'index',
  data () {
    return {
      containerEl: null,
      bpmnModeler: null,
      fileList: [],
      modeler: null,
      modelName: '请假流程',
      modelKey: 'leave_process',
      modelId: null
    };
  },
  mounted () {
    this.containerEl = document.getElementById('container');
    this.bpmnModeler = new BpmnModeler({
      container: this.containerEl,
      moddleExtensions: { camunda: camundaExtension },
      additionalModules: [Translate]
    });
    this.create();
  },
  methods: {
    create () {
      this.bpmnModeler.createDiagram(() => {
        this.bpmnModeler.get('canvas').zoom('fit-viewport');
      });
    },
    handleRemove (file) {
      for (let i = 0; i < this.fileList.length; i++) {
        if (file.name === this.fileList[i].name) {
          this.fileList.splice(i, 1);
        }
      }
    },
    beforeRemove (file) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    // 后退
    handleUndo () {
      this.bpmnModeler.get('commandStack').undo();
    },
    // 前进
    handleRedo () {
      this.bpmnModeler.get('commandStack').redo();
    },
    async saveModel () {
      try {
        // const { xml } = await this.bpmnModeler.saveXML({ format: true });
        const finalXml = await this.getBpmnXml();
        const params = { modelName: this.modelName, modelKey: this.modelKey, bpmnXml: finalXml };
        const res = await flowableApi.saveModel(params);
        const { code, data } = res;
        if (code === this.$constants.code.OK) {
          console.log('data', data);
          this.modelId = data.id;
          this.$message.success('保存成功');
        }
      } catch (e) {
        this.$message.error('保存失败');
      }
    },
    async getBpmnXml () {
      const { xml } = await this.bpmnModeler.saveXML({ format: true });
      return xml.replace(/isExecutable="false"/g, 'isExecutable="true"');
    },
    async deployModel () {
      if (!this.modelId) return this.$message.warning('请先保存');
      try {
        await flowableApi.deployModel(this.modelId);
        this.$message.success('部署成功');
      } catch (e) {
        this.$message.error('部署失败');
      }
    },
    // 修复下载：空流程禁止下载
    async handleDownload () {
      try {
        // const { xml } = await this.bpmnModeler.saveXML({ format: true });
        const finalXml = await this.getBpmnXml();
        const blob = new Blob([finalXml], { type: 'application/xml;charset=utf-8' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        // a.download = 'diagram.bpmn';
        a.download = 'diagram.xml';
        a.click();

        URL.revokeObjectURL(url);
        this.$message.success('下载成功');
      } catch (e) {
        this.$message.error('下载失败');
      }
    },
    // 修复导入：提前判断空流程
    // 【终极修复】导入方法，原生读取文件，不走 el-upload 坑
    handleOnchangeFile (fileObj) {
      // 1. 获取原始文件
      const file = fileObj.raw;
      if (!file) {
        this.$message.error('获取文件失败');
        return;
      }

      const reader = new FileReader();
      reader.readAsText(file);

      reader.onload = async (e) => {
        const xml = e.target.result;

        try {
          // ==============================================
          // 【关键】必须先销毁，再重新创建 modeler 实例
          // ==============================================
          if (this.bpmnModeler) {
            this.bpmnModeler.destroy();
          }

          // 重新创建
          this.bpmnModeler = new BpmnModeler({
            container: this.containerEl,
            moddleExtensions: { camunda: camundaExtension }
          });

          // 导入 XML
          await this.bpmnModeler.importXML(xml);
          this.bpmnModeler.get('canvas').zoom('fit-viewport');
          this.$message.success('导入成功！');
        } catch (err) {
          console.error('导入失败：', err);
          this.$message.error('导入失败：' + err.message);
        }
      };
    }
  }
};

</script>
<style scoped lang="scss">
.containerBox {
  height: calc(100vh - 120px);
  position: relative;
}

#container {
  height: calc(100% - 50px);
  background-size: 20px 20px, 20px 20px, 10px 10px, 10px 10px;
  background-image: linear-gradient(to right, #dfdfdf 1px, transparent 1px), linear-gradient(to bottom, #dfdfdf 1px, transparent 1px), linear-gradient(to right, #f1f1f1 1px, transparent 1px), linear-gradient(to bottom, #f1f1f1 1px, transparent 1px);
  background-position: left -1px top -1px, left -1px top -1px, left -1px top -1px, left -1px top -1px;
  color: #000000;
}

::v-deep .djs-context-pad .entry {
  background-color: hsl(0deg 3.53% 37.41%) !important;
}
</style>

```
### 4-1、效果图
![效果图](/img/bpmn示例.jpg)
