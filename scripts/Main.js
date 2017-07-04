module.exports = function (){
    const os = require('os');
    console.log(os.platform())
    function generateHTML()
    {
        function humanFileSize(size) {
            var i = Math.floor( Math.log(size) / Math.log(1024) );
            return ( size / Math.pow(1024, i) ).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i];
        };
        console.log(process.getSystemMemoryInfo());
        console.log(process.env);
        let output = 
            // <h2 class='page-header'>System Memory</h2>
            // <ul class="list-group">
            //     <li class="list-group-item">Total: ${humanFileSize(process.getSystemMemoryInfo().total)}</li>
            //     <li class="list-group-item">Free: ${humanFileSize(process.getSystemMemoryInfo().free)}</li>
            //     <li class="list-group-item">Swap Total: ${humanFileSize(process.getSystemMemoryInfo().swapTotal)}</li>
            //     <li class="list-group-item">Swap Free: ${humanFileSize(process.getSystemMemoryInfo().swapFree)}</li>
            // </ul>
            `
            <h2 class='page-header'>App Version Data</h2>
            <ul class="list-group">
                <li class="list-group-item">Node: ${process.versions.node}</li>
                <li class="list-group-item">Chrome: ${process.versions.chrome}</li>
                <li class="list-group-item">Electron: ${process.versions.electron}</li>
            </ul>

            <h2 class='page-header'>System Specs</h2>
            <ul class="list-group">
                <li class="list-group-item">System Architecture: ${process.arch}</li>
                <li class="list-group-item">Processor Identifier: ${process.env.PROCESSOR_IDENTIFIER}</li>
                <li class="list-group-item">Printer: ${process.env.PRINTER}</li>
            </ul>

            <h2 class='page-header'>Computer Info</h2>
            <ul class="list-group">
                <li class="list-group-item">Platform: ${os.platform()}</li>
                <li class="list-group-item">Computer Name: ${process.env.USERDOMAIN}</li>
                <li class="list-group-item">Username: ${process.env.USERNAME}</li>
                <li class="list-group-item">User Home Path: ${process.env.HOME}</li>
                <li class="list-group-item">System Drive: ${process.env.SYSTEMDRIVE}</li>
                <li class="list-group-item">System Root: ${process.env.SYSTEMROOT}</li>
            </ul>
        `;
        document.getElementById("output").innerHTML = output;
    }
    this.generateHTML = generateHTML;
}