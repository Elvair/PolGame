var nospecial = {
    img: "img/cespedverde.jpg"
}

var board = [
    nospecial,
    nospecial,
    nospecial,
    nospecial,
    {img:'pol.jpg'},
    {img:'bridgenerja.jpg'},
    nospecial,
    nospecial,
    nospecial,
    {img:'pol2.jpg'},
    nospecial,
    {img:'bridge2.jpeg'},
    nospecial,
    nospecial,
    {img:'pol3.jpg'},
    nospecial,
    nospecial,
    nospecial,
    nospecial,
    {img:'pol4.jpg'},
    nospecial,
    nospecial,
    nospecial,
    nospecial,
    {img:'pol5.jpg'},
    nospecial,
    nospecial,
    nospecial,
    nospecial,
    {img:'pol6.jpg'},
    {img:'calavera3.jpg'},
    nospecial,
    nospecial,
    nospecial,
    {img:'polmeta.jpg'}
];

function drawBoard(){
    $('.board').append('<div style="background:cespedverde.jpg; height: 100px; width: 100px"><span>1</span></div>');

    $('.board').append('<div style="background:url ("img/cespedverde.jpg")"><span>1</span></div>');
    $('.board').append('<div style="background:url ("img/cespedverde.jpg")"><span>2</span></div>'); 
    $('.board').append('<div style="background:url ("img/cespedverde.jpg")"><span>3</span></div>'); 
    $('.board').append('<div style="background:url ("img/cespedverde.jpg")"><span>4</span></div>');
    $('.board').append('<div style="background:url ("img/pol.jpg")"><span>5</span></div>'); 
    $('.board').append('<div style="background:url ("img/bridgenerja.jpg")"><span>6</span></div>');
    $('.board').append('<div style="background:url ("img/cespedverde.jpg")"><span>7</span></div>');
    $('.board').append('<div style="background:url ("img/cespedverde.jpg")"><span>8</span></div>');
    $('.board').append('<div style="background:url ("img/cespedverde.jpg")"><span>9</span></div>');
    $('.board').append('<div style="background:url ("img/pol2.jpg")"><span>10</span></div>');
    $('.board').append('<div style="background:url ("img/cespedverde.jpg")"><span>11</span></div>');
    $('.board').append('<div style="background:url ("img/bridge2.jpeg")"><span>12</span></div>');
    $('.board').append('<div style="background:url ("img/cespedverde.jpg")"><span>13</span></div>');
    $('.board').append('<div style="background:url ("img/cespedverde.jpg")"><span>14</span></div>');
    $('.board').append('<div style="background:url ("img/pol3.jpg")"><span>15</span></div>');
    $('.board').append('<div style="background:url ("img/cespedverde.jpg")"><span>16</span></div>');
    $('.board').append('<div style="background:url ("img/cespedverde.jpg")"><span>17</span></div>');
    $('.board').append('<div style="background:url ("img/cespedverde.jpg")"><span>18</span></div>');
    $('.board').append('<div style="background:url ("img/cespedverde.jpg")"><span>19</span></div>');
    $('.board').append('<div style="background:url ("img/pol4.jpg")"><span>20</span></div>');
    $('.board').append('<div style="background:url ("img/cespedverde.jpg")"><span>21</span></div>');
    $('.board').append('<div style="background:url ("img/cespedverde.jpg")"><span>22</span></div>');
    $('.board').append('<div style="background:url ("img/cespedverde.jpg")"><span>23</span></div>');
    $('.board').append('<div style="background:url ("img/cespedverde.jpg")"><span>24</span></div>');
    $('.board').append('<div style="background:url ("img/pol5.jpg")"><span>25</span></div>');
    $('.board').append('<div style="background:url ("img/cespedverde.jpg")"><span>26</span></div>');
    $('.board').append('<div style="background:url ("img/cespedverde.jpg")"><span>27</span></div>');
    $('.board').append('<div style="background:url ("img/cespedverde.jpg")"><span>28</span></div>');
    $('.board').append('<div style="background:url ("img/cespedverde.jpg")"><span>29</span></div>');
    $('.board').append('<div style="background:url ("img/pol6.jpg")"><span>30</span></div>');
    $('.board').append('<div style="background:url ("img/cespedverde.jpg")"><span>31</span></div>');
    $('.board').append('<div style="background:url ("img/cespedverde.jpg")"><span>32</span></div>');
    $('.board').append('<div style="background:url ("img/cespedverde.jpg")"><span>33</span></div>');
    $('.board').append('<div style="background:url ("img/cespedverde.jpg")"><span>34</span></div>');
    $('.board').append('<div style="background:url ("img/polmeta.jpg")"><span>35</span></div>');

}

$(document).ready(function () {
    drawBoard()
});
