package game;

import java.util.Random;

public class MineSweeper {

    final public int SIZE = 10;

    public Status[][] cells = new Status[SIZE][SIZE];

    public boolean[][] mines = new boolean[SIZE][SIZE];

    public enum Status {EXPOSED, UNEXPOSED, SEALED}

    public enum GameStatus { PROGRESS, LOST, WON}

    MineSweeper(){

        for (int i = 0; i < SIZE; i++) {
            for (int j = 0; j < SIZE ; j++) {

                cells[i][j] = Status.UNEXPOSED;
                mines[i][j] = false;
            }
        }

    }

    public static MineSweeper create() {

        MineSweeper mineSweeper = new MineSweeper();
        mineSweeper.placeMines();

        return mineSweeper;
    }


    public Status cellStatus(int row, int column) {

        return cells[row][column];
    }

    public void expose(int row, int column) {

        if(cells[row][column] == Status.UNEXPOSED) {

            cells[row][column] = Status.EXPOSED;

            if(isEmpty(row, column))

            {
                tryToExposeNeighbor(row-1, column-1);
                tryToExposeNeighbor(row-1, column);
                tryToExposeNeighbor(row-1, column+1);
                tryToExposeNeighbor(row, column-1);
                tryToExposeNeighbor(row, column+1);
                tryToExposeNeighbor(row+1, column-1);
                tryToExposeNeighbor(row+1, column);
                tryToExposeNeighbor(row+1, column+1);
            }
        }
    }

    public void tryToExposeNeighbor(int row, int column) {

        if (row > -1 && row < 10 && column > -1 && column < 10) {

            expose(row, column);
        }
    }

    public void seal(int row, int column) {

        if (cells[row][column] == Status.UNEXPOSED) {

            cells[row][column] = Status.SEALED;
        }
    }

    public void unSeal(int row, int column){

        if(cells[row][column] == Status.SEALED)
        {
            cells[row][column] = Status.UNEXPOSED;
        }
    }

    public boolean isMine(int row, int column){

        if(row > -1 && row < 10 && column > -1 && column < 10) {
            return mines[row][column];
        }
        return false;
    }

    public boolean isAdjacentCell(int row, int column) {

        if(row > -1 && row < 10 && column > -1 && column < 10) {
            if (countAdjacentMines(row, column) == 0 && !isMine(row, column))
                return false;
            return true;
        }
        return false;
    }


    public int countAdjacentMines(int row, int column){

        int count = 0;

        if(row > -1 && row < 10 && column > -1 && column < 10) {

            for (int i = row - 1; i <= (row + 1) ; i++) {

                for (int j = column - 1; j <= (column + 1); j++) {
                    if (i > -1 && i < 10 && j > -1 && j < 10) {
                        if (isMine(i, j)) {
                            count++;
                        }
                    }
                }
            }

            if(isMine(row, column))
                return count - 1;
            else return count;

        }

        return count;
    }

    public boolean isEmpty(int row, int column)
    {

        return !(isMine(row, column) || isAdjacentCell(row, column));
    }


    public void placeMines() {

        Random random = new Random();

        int randomNumber;

        int count = 0;

        while(count < 10) {

            randomNumber = random.nextInt(99);
            int row, column;
            column = randomNumber % 10;
            row = randomNumber / 10;

            if (!isMine(row, column)){

                mines[row][column] = true;
                count++;
            }
        }
    }


    public GameStatus gameStatus()
    {

        for (int i = 0; i < 10; i++) {
            for (int j = 0; j < 10; j++) {

                if (mines[i][j] && cells[i][j] == Status.EXPOSED) {
                    return GameStatus.LOST;
                }
            }
        }

        for (int i = 0; i < 10; i++)
        {
            for (int j = 0; j < 10; j++)
            {
                if((!mines[i][j] && cells[i][j] == Status.UNEXPOSED) || (!mines[i][j] && cells[i][j] == Status.SEALED) )
                {
                    return GameStatus.PROGRESS;
                }
                else if(mines[i][j] && cells[i][j] == Status.UNEXPOSED) {

                    return GameStatus.PROGRESS;
                }
            }
        }
        return GameStatus.WON;
    }
}