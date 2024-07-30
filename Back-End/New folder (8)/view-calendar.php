<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.4.0/fullcalendar.css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.4.0/fullcalendar.min.js"></script>

<body>
    <h2>Javascript Fullcalendar</h2>
    <div class="container">
        <div id="calendar"></div>
    </div>
    <br>
</body>
<?php
include('connection.php');
$fetch_event = mysqli_query($connection, "select * from tbl_event");
?>
<script>
    $(document).ready(function() {
        $('#calendar').fullCalendar({
            events: [
                <?php
                while ($result = mysqli_fetch_array($fetch_event)) { ?> {
                        title: '<?php echo $result['title']; ?>',
                        start: '<?php echo $result['start_date']; ?>',
                        end: '<?php echo $result['end_date']; ?>',
                        color: 'yellow',
                        textColor: 'black'
                    }
                <?php } ?>
            ]

        });
    });
</script>