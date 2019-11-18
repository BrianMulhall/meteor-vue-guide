<template>
<div class="container" >
    <kendo-grid :data-source="localDataSource"
                :selectable="'multiple cell'"
                :sortable="true"
                :filterable="true"
                :groupable="true"
                v-on:change="onChange"
                v-on:databinding="onDataBinding"
                v-on:databound="onDataBound"
                v-on:sort="onSorting"
                v-on:filter="onFiltering"
                v-on:group="onGrouping"
                v-on:groupexpand="onGroupExpand"
                v-on:groupcollapse="onGroupCollapse">
    </kendo-grid>
</div>

</template>


<script>
export default {
    methods: {
        onChange: function(ev) {
            var selected = $.map(ev.sender.select(), function(item) {
                return $(item).text();
            });

            console.log("Selected: " + selected.length + " item(s), [" + selected.join(", ") + "]");
        },
        onDataBinding: function(ev) {
            console.log("Grid data binding");
        },
        onDataBound: function(ev) {
            console.log("Grid data bound");
        },
        onSorting: function(ev) {
            console.log("Sorting on field: " + ev.sort.field + ", direction:" + (ev.sort.dir || "none"));
        },
        onFiltering: function(ev) {
            console.log("Filter on " + kendo.stringify(ev.filter));
        },
        onGrouping: function(ev) {
            console.log("Group on " + kendo.stringify(ev.groups));
        },
        onGroupExpand: function(ev) {
            console.log("The group to be expanded: " + kendo.stringify(ev.group));
        },
        onGroupCollapse: function(ev) {
            console.log("The group to be collapsed: " + kendo.stringify(ev.group));
        }
    },
    data () {
        return {
            localDataSource: [{
                "ProductID": 1,
                "ProductName": "Chai",
                "UnitPrice": 18,
                "UnitsInStock": 39,
                "Discontinued": false,
            },
            {
                "ProductID": 2,
                "ProductName": "Chang",
                "UnitPrice": 17,
                "UnitsInStock": 40,
                "Discontinued": false,
            },
            {
                "ProductID": 3,
                "ProductName": "Aniseed Syrup",
                "UnitPrice": 10,
                "UnitsInStock": 13,
                "Discontinued": false,
            }]
        }
    }


}

</script>