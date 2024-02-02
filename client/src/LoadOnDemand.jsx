
import { GanttComponent, Inject, Selection, ColumnsDirective, ColumnDirective, VirtualScroll } from '@syncfusion/ej2-react-gantt';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

const LoadOnDemand = () => {
    const dataSource = new DataManager({
        url: 'http://localhost:5000/GantData',
        adaptor: new WebApiAdaptor,
        crossDomain: true,
        headers: [{ 'X-HEADER': 'brix' }]
    });
    const taskFields = {
        id: 'taskId',
        name: 'taskName',
        startDate: 'startDate',
        endDate: 'endDate',
        duration: 'duration',
        progress: 'progress',
        hasChildMapping: 'isParent',
        baselineStartDate: 'baselineStartDate',
        baselineEndDate: 'baselineEndDate',
        parentID: 'parentID'
    };
    const projectStartDate = new Date('01/02/2000');
    const projectEndDate = new Date('12/01/2002');
    return (
        <div className='control-pane'>
            <div className='control-section'>
                <GanttComponent
                    id='LoadOnDemand'
                    dataSource={dataSource}
                    treeColumnIndex={1}
                    taskFields={taskFields}
                    enableVirtualization={true}
                    loadChildOnDemand={false}
                    height='460px'
                    projectStartDate={projectStartDate}
                    projectEndDate={projectEndDate}
                    renderBaseline={true}
                    baselineColor='green'
                >
                    <ColumnsDirective>
                        <ColumnDirective field='taskId' width='80'></ColumnDirective>
                        <ColumnDirective field='taskName' headerText='Job Name' width='250' clipMode='EllipsisWithTooltip'></ColumnDirective>
                        <ColumnDirective field='startDate'></ColumnDirective>
                        <ColumnDirective field='duration'></ColumnDirective>
                        <ColumnDirective field='progress'></ColumnDirective>
                        <ColumnDirective field='baselineStartDate' ></ColumnDirective>
                        <ColumnDirective field='baselineEndDate' ></ColumnDirective>
                    </ColumnsDirective>
                    <Inject services={[Selection, VirtualScroll]} />
                </GanttComponent>
            </div>

        </div>
    );
};
export default LoadOnDemand;
