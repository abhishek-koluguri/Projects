package game;

import org.junit.Before;
import org.junit.Test;
import game.MineSweeper.Status;
import game.MineSweeper.GameStatus;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.junit.Assert.*;


public class MineSweeperTest {

    MineSweeper mineSweeper;
    MineSweeper mineSweeperToDesignExpose;
    MineSweeper mineSweeperToDesignTryToExposeNeighbors;


    public boolean exposeCalled = false;

    public List<Integer> listOfNeighbors;

    @Before
    public void setUp(){

        listOfNeighbors = new ArrayList<Integer>();

        mineSweeper = new MineSweeper();

        mineSweeperToDesignExpose = new MineSweeper(){

            @Override
            public void tryToExposeNeighbor(int row, int column) {

                listOfNeighbors.add(row);
                listOfNeighbors.add(column);
            }

        };

        mineSweeperToDesignTryToExposeNeighbors = new MineSweeper() {

            @Override
            public void expose(int row, int column) {
                exposeCalled = true;
            }
        };
    }


    @Test
    public void canary(){

        assertTrue(true);
    }


    @Test
    public void exposeACellForTheFirstTime(){

        mineSweeper.expose(0, 1);
        assertEquals(Status.EXPOSED, mineSweeper.cellStatus(0, 1));
    }

    @Test
    public void exposeAlreadyExposedCell(){

        mineSweeper.expose(0, 0);
        mineSweeper.expose(0, 0);
        assertEquals(Status.EXPOSED, mineSweeper.cellStatus(0, 0));

    }

    private void checkBounds(Runnable block) {

        try {

            block.run();
            fail("Expected index out of bound exception");

        } catch (IndexOutOfBoundsException ex) {
            assertTrue(true);
        }
    }

    @Test
    public void exposeCellOutOfRowLowerBound() {
        checkBounds(() -> mineSweeper.expose(-1, 0));
    }

    @Test
    public void exposeCellOutOfRowUpperBound() {
        checkBounds(() -> mineSweeper.expose(10, 0));
    }

    @Test
    public void exposeCellOutOfColumnLowerBound() {
        checkBounds(() -> mineSweeper.expose(0, -1));
    }

    @Test
    public void exposeCellOutOfColumnUpperBound() {
        checkBounds(() -> mineSweeper.expose(0, 10));
    }


    @Test
    public void exposeCallsTryToExposeNeighbor(){

        mineSweeperToDesignExpose.expose(1, 2);
        List<Integer> expected = Arrays.asList(0, 1, 0, 2, 0, 3, 1, 1, 1, 3, 2, 1, 2, 2, 2, 3);
        assertEquals(expected, listOfNeighbors);
    }


    @Test
    public void exposeOnAlreadyExposedCellDoesNotCallTryToExposeNeighbor(){

        mineSweeperToDesignExpose.expose(1, 2);
        listOfNeighbors.clear();

        mineSweeperToDesignExpose.expose(1, 2);
        List<Integer> empty = new ArrayList<Integer>();
        assertEquals(empty, listOfNeighbors);
    }

    @Test
    public void tryToExposeNeighborWillCallExposeForValidCell(){

        mineSweeperToDesignTryToExposeNeighbors.tryToExposeNeighbor(2, 3);
        assertTrue(exposeCalled);
    }

    @Test
    public void tryToExposeNeighborWillNotCallExposeForRowOutOfLowerBounds(){

        mineSweeperToDesignTryToExposeNeighbors.tryToExposeNeighbor(-1, 0);
        assertFalse(exposeCalled);
    }

    @Test
    public void tryToExposeNeighborWillNotCallExposeForColumnOutOfLowerBounds(){

        mineSweeperToDesignTryToExposeNeighbors.tryToExposeNeighbor(0, -1);
        assertFalse(exposeCalled);
    }


    @Test
    public void tryToExposeNeighborWillNotCallExposeForRowOutOfUpperBounds(){

        mineSweeperToDesignTryToExposeNeighbors.tryToExposeNeighbor(10, 0);
        assertFalse(exposeCalled);
    }

    @Test
    public void tryToExposeNeighborWillNotCallExposeForColumnOutOfUpperBounds(){

        mineSweeperToDesignTryToExposeNeighbors.tryToExposeNeighbor(0, 10);
        assertFalse(exposeCalled);
    }


    @Test
    public void sealAnUnExposedCell(){

        mineSweeper.seal(0, 0);
        assertEquals(Status.SEALED, mineSweeper.cellStatus(0, 0));
    }

    @Test
    public void tryToSealAlreadyExposedCell(){

        mineSweeper.expose(1, 2);
        mineSweeper.seal(1, 2);
        assertEquals(Status.EXPOSED, mineSweeper.cellStatus(1, 2));
    }

    @Test
    public void unSealACell(){

        mineSweeper.seal(0, 0);
        mineSweeper.unSeal(0, 0);
        assertEquals(Status.UNEXPOSED, mineSweeper.cellStatus(0, 0));
    }

    @Test
    public void tryToExposeASealedCell(){

        mineSweeper.seal(1, 2);
        mineSweeper.expose(1, 2);
        assertEquals(Status.SEALED, mineSweeper.cellStatus(1, 2));
    }


    @Test
    public void exposingASealedCellDoesNotTryToExposeNeighbor(){

        mineSweeperToDesignExpose.seal(2, 2);
        mineSweeperToDesignExpose.expose(2, 2);
        List<Integer> empty = new ArrayList<Integer>();
        assertEquals(empty, listOfNeighbors);

    }


    @Test
    public void whenAMinedCellIsExposedItDoesNotCallTryToExposeNeighbor(){

        mineSweeperToDesignExpose.mines[2][2] = true;
        mineSweeperToDesignExpose.expose(2, 2);
        List<Integer> empty = new ArrayList<Integer>();
        assertEquals(empty, listOfNeighbors);
    }

    @Test
    public void checkIsThereAMine(){

        mineSweeper.mines[2][2] = true;
        assertTrue(mineSweeper.isMine(2, 2));

    }

    @Test
    public void isMineForOutOfBoundValue(){
        assertFalse(mineSweeper.isMine(-1, 0));
    }


    @Test
    public void countAdjacentMinesWith8Neighbors(){

        mineSweeper.mines[2][1] = true;
        mineSweeper.mines[2][2] = true;
        mineSweeper.mines[2][3] = true;
        mineSweeper.mines[3][1] = true;
        mineSweeper.mines[3][3] = true;
        mineSweeper.mines[4][1] = true;
        mineSweeper.mines[4][2] = true;
        mineSweeper.mines[4][3] = true;

        assertEquals(8, mineSweeper.countAdjacentMines(3, 2));
    }

    @Test
    public void tryToCountAdjacentMinesIfCountAdjacentMinesIsCalledForMinedCell(){

        mineSweeper.mines[3][2] = true;
        assertEquals(0, mineSweeper.countAdjacentMines(3, 2));
    }

    @Test
    public void checkIsThisAnAdjacentCell(){

        mineSweeper.mines[3][3] = true;
        assertTrue(mineSweeper.isAdjacentCell(2, 2));
    }

    @Test
    public void isAdjacentDoesNotCheckAdjacentForRowOutOfLowerBounds(){

        mineSweeper.mines[0][0] = true;
        assertFalse(mineSweeper.isAdjacentCell(-1, 0));
    }


    @Test
    public void isAdjacentDoesNotCheckAdjacentForRowOutOfUpperBounds(){

        mineSweeper.mines[9][0] = true;
        assertFalse(mineSweeper.isAdjacentCell(10, 0));
    }

    @Test
    public void isAdjacentDoesNotCheckAdjacentForColumnOutOfLowerBounds(){

        mineSweeper.mines[0][0] = true;
        assertFalse(mineSweeper.isAdjacentCell(0, -1));
    }


    @Test
    public void isAdjacentDoesNotCheckAdjacentForColumnOutUpperOfBounds(){

        mineSweeper.mines[0][9] = true;
        assertFalse(mineSweeper.isAdjacentCell(0, 10));
    }

    @Test
    public void countAdjacentMinesDoesNotCountForRowOutOfLowerBounds(){

        mineSweeper.mines[0][0] = true;
        assertEquals(0, mineSweeper.countAdjacentMines(-1, 0));
    }

    @Test
    public void countAdjacentMinesDoesNotCountForRowOutOfUpperBounds(){

        mineSweeper.mines[9][0] = true;
        assertEquals(0, mineSweeper.countAdjacentMines(10, 0));
    }

    @Test
    public void countAdjacentMinesDoesNotCountForColumnOutOfLowerBounds(){

        mineSweeper.mines[0][0] = true;
        assertEquals(0, mineSweeper.countAdjacentMines(0, -1));
    }

    @Test
    public void countAdjacentMinesDoesNotCountForColumnOutOfUpperBounds(){

        mineSweeper.mines[0][9] = true;
        assertEquals(0, mineSweeper.countAdjacentMines(0, 10));
    }


    @Test
    public void countAdjacentMinesForACellOnTheEdge(){

        mineSweeper.mines[1][4] = true;
        mineSweeper.mines[0][3] = true;
        assertEquals(2, mineSweeper.countAdjacentMines(0, 4));
    }

    @Test
    public void countAdjacentMinesForACellInACorner(){

        mineSweeper.mines[0][1] = true;
        mineSweeper.mines[1][0] = true;
        mineSweeper.mines[1][1] = true;
        mineSweeper.mines[1][2] = true;

        assertEquals(3, mineSweeper.countAdjacentMines(0, 0));
    }


    @Test
    public void isCellEmpty(){

        mineSweeper.mines[4][4] = true;
        assertTrue(mineSweeper.isEmpty(2, 2));
    }

    @Test
    public void exposingAnAdjacentCellDoesNotTryToExposeNeighbor(){


        mineSweeperToDesignExpose.mines[4][4] = true;
        mineSweeperToDesignExpose.expose(3, 3);

        List<Integer> empty = new ArrayList<Integer>();
        assertEquals(empty, listOfNeighbors);

    }

    @Test
    public void ifThereAre10Mines(){

        MineSweeper mineSweeper = new MineSweeper();
        mineSweeper.placeMines();
        int totalMines = 0;

        for (int i = 0; i < 10; i++)
        {
            for (int j = 0; j< 10; j++)
            {
                if(mineSweeper.mines[i][j] == true)
                {
                    totalMines++;
                }
            }
        }

        assertEquals(10, totalMines);
    }

    @Test
    public void checkIfMinesAreInRandomLocation(){

        mineSweeper.placeMines();
        mineSweeperToDesignTryToExposeNeighbors.placeMines();

        int counter = 0;

        for (int i = 0; i < 10; i++) {
            for (int j = 0; j < 10; j++)
            {
                if (mineSweeper.mines[i][j] && mineSweeperToDesignTryToExposeNeighbors.mines[i][j])
                {
                    counter++;
                }
            }
        }

        assertNotEquals(10, counter);
    }


    @Test
    public void userGetsAWellInitializedMineSweeperOnCreate(){

        MineSweeper mineSweeper = MineSweeper.create();
        boolean isMine = false;

        for (int i = 0; i < 10; i++)
        {
            for (int j = 0; j < 10; j++)
            {
                if (mineSweeper.isMine(i, j))
                {
                    isMine = true;
                    break;
                }
            }
        }

        assertTrue(isMine);
    }

    @Test
    public void isGameInProgress(){

        mineSweeper.mines[4][4] = true;
        mineSweeper.expose(3, 3);

        assertEquals(GameStatus.PROGRESS, mineSweeper.gameStatus());
    }

    @Test
    public void isGameLost(){

        mineSweeper.mines[3][4] = true;
        mineSweeper.expose(3, 4);
        assertEquals(GameStatus.LOST, mineSweeper.gameStatus());
    }

    @Test
    public void gameWonIfAllCellsAreExposedExceptMinedCells(){

        mineSweeper.placeMines();

        for (int i = 0; i < 10; i++){
            for (int j = 0; j < 10; j++){
                if(!mineSweeper.mines[i][j])
                {
                    mineSweeper.expose(i, j);
                }
                else {
                    mineSweeper.seal(i, j);
                }
            }
        }

        assertEquals(GameStatus.WON, mineSweeper.gameStatus());
    }
}